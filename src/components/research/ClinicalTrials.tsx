import React from 'react';
import { TestTube2, Users, Clock, CheckCircle } from 'lucide-react';

const ClinicalTrials = () => {
  const trials = [
    {
      phase: "Phase III",
      status: "Ongoing",
      participants: 1200,
      completion: "Q4 2024",
      description: "Multi-center validation of BCan technology across diverse populations"
    },
    {
      phase: "Phase II",
      status: "Completed",
      participants: 500,
      completion: "Q2 2023",
      description: "Efficacy study of AI detection algorithms in early-stage cancer"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Clinical Trials</h2>
          <p className="text-xl text-gray-600">Rigorous testing and validation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trials.map((trial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-pink-600 font-semibold">{trial.phase}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  trial.status === "Ongoing" 
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}>
                  {trial.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{trial.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">{trial.participants} Participants</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600">Completion: {trial.completion}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalTrials;