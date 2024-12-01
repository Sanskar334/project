import React, { useState, useEffect } from 'react';
import { Category } from './types';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import AICard from './components/AICard';
import RequestAIButton from './components/RequestAIButton';
import RequestAIModal from './components/RequestAIModal';
import AlertModal from './components/AlertModal';
import SuccessModal from './components/SuccessModal';
import Footer from './components/Footer';
import { collectAIData } from './services/aiDataCollector';
import { getAllAIs, addAI, checkAIExists } from './services/database';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [aiList, setAiList] = useState<AI[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const loadAIs = async () => {
      try {
        const data = await getAllAIs();
        setAiList(data);
      } catch (error) {
        console.error('Error loading AIs:', error);
        setAlertMessage('Failed to load AI directory. Please refresh the page.');
        setIsAlertModalOpen(true);
      } finally {
        setIsInitialLoad(false);
      }
    };
    loadAIs();
  }, []);

  const filteredAIs = aiList.filter((ai) => {
    const matchesSearch = ai.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ai.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || ai.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRequestSubmit = async (name: string, url: string) => {
    const aiExists = await checkAIExists(name);

    if (aiExists) {
      setAlertMessage('An AI with this name already exists in the directory.');
      setIsAlertModalOpen(true);
      return;
    }

    setIsLoading(true);
    try {
      const aiData = await collectAIData(name, url);
      const newAI = await addAI(aiData);

      if (newAI) {
        setAiList(prev => [...prev, newAI]);
        setIsRequestModalOpen(false);
        setSuccessMessage('AI has been successfully added and is ready to be discovered. Thank you for contributing and expanding the directory!');
        setIsSuccessModalOpen(true);
      } else {
        throw new Error('Failed to add AI to database');
      }
    } catch (error) {
      setAlertMessage('Failed to collect AI information. Please try again.');
      setIsAlertModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isInitialLoad) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        
        {filteredAIs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No AI tools found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAIs.map((ai) => (
              <AICard key={ai.id} ai={ai} />
            ))}
          </div>
        )}
      </main>
      
      <RequestAIButton onClick={() => setIsRequestModalOpen(true)} />
      
      <RequestAIModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        onSubmit={handleRequestSubmit}
        isLoading={isLoading}
      />
      
      <AlertModal
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        message={alertMessage}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message={successMessage}
      />
      
      <Footer />
    </div>
  );
}

export default App;