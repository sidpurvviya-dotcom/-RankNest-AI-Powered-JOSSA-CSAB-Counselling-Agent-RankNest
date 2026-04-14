import React, { useState, useEffect, useRef } from 'react';
import { Send, GraduationCap } from 'lucide-react';
import { predictColleges, StudentProfile, CollegeOption } from './predictCollegeTool';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  isPredicting?: boolean;
  options?: CollegeOption[];
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am EduGuide AI, your expert College Admissions Counselor. I'm here to help you find the best possible college and branch based on your profile!\n\nTo get started, please tell me your **Category** (General, OBC, SC, ST, EWS).",
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // State for Context
  const [profile, setProfile] = useState<Partial<StudentProfile>>({});

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue('');

    const newUserMessage: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages(prev => [...prev, newUserMessage]);
    
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      processAgentLogic(userText);
    }, 1200);
  };

  const processAgentLogic = (userInput: string) => {
    const text = userInput.toLowerCase();
    
    let updatedProfile = { ...profile };
    let aiResponse = "";
    
    // Simple mock NLP matching
    if (!updatedProfile.category) {
      if (text.includes('gen') || text.includes('general')) updatedProfile.category = 'General';
      else if (text.includes('obc')) updatedProfile.category = 'OBC';
      else if (text.includes('sc')) updatedProfile.category = 'SC';
      else if (text.includes('st')) updatedProfile.category = 'ST';
      else if (text.includes('ews')) updatedProfile.category = 'EWS';

      if (updatedProfile.category) {
        aiResponse = `Got it, you are in the **${updatedProfile.category}** category. What is your **Entrance Exam Rank**? (Please just enter the number)`;
      } else {
        aiResponse = "I couldn't quite catch your category. Could you please specify if you are General, OBC, SC, ST, or EWS?";
      }
    } 
    else if (!updatedProfile.rank) {
      const rankMatch = text.match(/\d+/);
      if (rankMatch) {
        updatedProfile.rank = parseInt(rankMatch[0]);
        aiResponse = `Rank **${updatedProfile.rank}** recorded. What is your **Home State**?`;
      } else {
        aiResponse = "Please provide your entrance exam rank as a number.";
      }
    }
    else if (!updatedProfile.homeState) {
      // Just take the user text as Home State
      updatedProfile.homeState = userInput.trim();
      aiResponse = `Thanks! You are from **${updatedProfile.homeState}**. Finally, do you have any **preferred branches**? (e.g., Computer Science, Mechanical, etc. or type 'No')`;
    }
    else if (!updatedProfile.preferredBranch) {
      updatedProfile.preferredBranch = userInput.trim();
      aiResponse = `Fantastic! I will now analyze the historical data for:\n- Category: ${updatedProfile.category}\n- Rank: ${updatedProfile.rank}\n- Home State: ${updatedProfile.homeState}\n- Preference: ${updatedProfile.preferredBranch}\n\nHere are your college predictions grouping by Safe, Probable, and Dream options:`;
      
      const options = predictColleges(updatedProfile as StudentProfile);
      
      setMessages(prev => [
        ...prev, 
        { id: Date.now().toString(), sender: 'ai', text: aiResponse, isPredicting: true, options }
      ]);
      setProfile({}); // reset or keep? 
      setIsTyping(false);
      return;
    } else {
       aiResponse = "If you'd like to check another rank or category, just let me know your new Category to start again!";
       setProfile({});
    }

    setProfile(updatedProfile);
    setIsTyping(false);
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: aiResponse }]);
  };

  const renderMessageContent = (msg: Message) => {
    if (msg.isPredicting && msg.options) {
      return (
        <div>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>{msg.text}</p>
          <table>
            <thead>
              <tr>
                <th>Chance</th>
                <th>College</th>
                <th>Branch</th>
                <th>Cutoff Rank</th>
              </tr>
            </thead>
            <tbody>
              {msg.options.map((opt, i) => (
                <tr key={i}>
                  <td>
                    <span className={`badge ${opt.type.toLowerCase()}`}>
                       {opt.type === 'SAFE' && '✅ '}
                       {opt.type === 'PROBABLE' && '⚠️ '}
                       {opt.type === 'DREAM' && '🌟 '}
                       {opt.type}
                    </span>
                  </td>
                  <td style={{ fontWeight: 500 }}>{opt.name}</td>
                  <td style={{ color: 'var(--text-muted)' }}>{opt.branch}</td>
                  <td>{opt.closingRank}</td>
                </tr>
              ))}
              {msg.options.length === 0 && (
                <tr>
                   <td colSpan={4} style={{ textAlign: 'center' }}>No colleges found in this rank range. Try a higher rank or different category.</td>
                </tr>
              )}
            </tbody>
          </table>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>Would you like to explore another profile? Just tell me the Category to start!</p>
        </div>
      );
    }
    
    return <span style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>;
  };

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
          <GraduationCap size={24} color="white" />
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>EduGuide AI</h2>
          <span style={{ fontSize: '0.85rem', color: 'var(--safe)' }}>● Online</span>
        </div>
      </div>

      <div className="chat-container">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
             {renderMessageContent(msg)}
          </div>
        ))}
        {isTyping && (
          <div className="message ai" style={{ padding: '1rem' }}>
            <div className="typing-indicator">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <input 
          type="text" 
          placeholder="Type your message here..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          disabled={isTyping}
        />
        <button className="send-btn" onClick={handleSend} disabled={isTyping || !inputValue.trim()}>
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
