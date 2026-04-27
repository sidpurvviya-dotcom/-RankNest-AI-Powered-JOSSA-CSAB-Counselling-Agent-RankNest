import { useState, useEffect, useRef } from 'react';
import { Send, GraduationCap, RotateCcw } from 'lucide-react';
import { predictColleges } from './predictCollegeTool';
import type { StudentProfile, CollegeOption } from './predictCollegeTool';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  isPredicting?: boolean;
  options?: CollegeOption[];
  quickReplies?: string[];
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Congratulations on completing your JEE exam! 🎓 That is a huge milestone. I am RankNest AI, an advanced JoSAA/CSAB admission strategist.\n\nTo provide you with a 98% accurate strategy, please tell me: Are you entering your **CRL (All India Rank)** or **Category Rank**?",
      quickReplies: ['CRL / All India Rank', 'Category Rank']
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

  const handleRestart = () => {
    setMessages([
      {
        id: '1',
        sender: 'ai',
        text: "Congratulations on completing your JEE exam! 🎓 That is a huge milestone. I am RankNest AI, an advanced JoSAA/CSAB admission strategist.\n\nTo provide you with a 98% accurate strategy, please tell me: Are you entering your **CRL (All India Rank)** or **Category Rank**?",
        quickReplies: ['CRL / All India Rank', 'Category Rank']
      }
    ]);
    setProfile({});
    setInputValue('');
    setIsTyping(false);
  };

  const handleSend = (overrideValue?: any) => {
    const textToSend = (typeof overrideValue === 'string') ? overrideValue : inputValue;
    if (!textToSend || typeof textToSend !== 'string' || !textToSend.trim()) return;

    setInputValue('');

    const newUserMessage: Message = { id: Date.now().toString(), sender: 'user', text: textToSend };
    setMessages(prev => [...prev, newUserMessage]);
    
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      processAgentLogic(textToSend);
    }, 800);
  };

  const processAgentLogic = (userInput: string) => {
    const text = userInput.toLowerCase();
    
    let updatedProfile = { ...profile };
    let aiResponse = "";
    let quickReplies: string[] | undefined = undefined;
    
    // Best-in-Class Sequence: RankType -> Round -> Rank -> Category -> State -> Branch -> CSAB -> Predict
    
    if (updatedProfile.isCategoryRank === undefined) {
      if (text.includes('air') || text.includes('all india')) {
        updatedProfile.isCategoryRank = false;
        aiResponse = "Excellent. Using **AIR** for prediction. Which **Counselling Round** should we target?";
        quickReplies = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5'];
      } else {
        updatedProfile.isCategoryRank = true;
        aiResponse = "Got it. Predicting based on your **Category Rank**. Which **Counselling Round** should we target?";
        quickReplies = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5'];
      }
    }
    else if (!updatedProfile.round) {
      const roundMatch = text.match(/\d/);
      if (roundMatch) {
        updatedProfile.round = parseInt(roundMatch[0]);
        aiResponse = `Round **${updatedProfile.round}** selected. Please enter your **Rank** (number only):`;
      } else {
        aiResponse = "Please select a counselling round (1-5):";
        quickReplies = ['Round 1', 'Round 2', 'Round 3', 'Round 4', 'Round 5'];
      }
    }
    else if (!updatedProfile.rank) {
      const rankMatch = text.match(/\d+/);
      if (rankMatch) {
        updatedProfile.rank = parseInt(rankMatch[0]);
        aiResponse = `Rank **${updatedProfile.rank}** recorded. What is your **Category**?`;
        quickReplies = ['General', 'OBC', 'SC', 'ST', 'EWS'];
      } else {
        aiResponse = "Please enter your rank as a number:";
      }
    }
    else if (!updatedProfile.category) {
      if (text.includes('gen')) updatedProfile.category = 'General';
      else if (text.includes('obc')) updatedProfile.category = 'OBC';
      else if (text.includes('sc')) updatedProfile.category = 'SC';
      else if (text.includes('st')) updatedProfile.category = 'ST';
      else if (text.includes('ews')) updatedProfile.category = 'EWS';

      if (updatedProfile.category) {
        aiResponse = `Category **${updatedProfile.category}** documented. What is your **Home State**?`;
      } else {
        aiResponse = "Select your category:";
        quickReplies = ['General', 'OBC', 'SC', 'ST', 'EWS'];
      }
    } 
    else if (!updatedProfile.homeState) {
      updatedProfile.homeState = userInput.trim();
      aiResponse = "Do you have a **Preferred Branch**? (or select 'No Preference')";
      quickReplies = ['Computer Science', 'Electronic', 'Mechanical', 'AI & Data Science', 'No Preference'];
    }
    else if (!updatedProfile.preferredBranch) {
      updatedProfile.preferredBranch = userInput.trim();
      aiResponse = "Strategic Question: Should we include **CSAB Special Round** predictions in this report?";
      quickReplies = ['Include CSAB Rounds', 'JoSAA Only'];
    }
    else if (updatedProfile.isCSAB === undefined) {
      updatedProfile.isCSAB = text.includes('csab');
      aiResponse = `Strategizing based on your profile for Round ${updatedProfile.round}...\n\n### Admissions Strategy Report\nCategory: ${updatedProfile.category} | Rank: ${updatedProfile.rank} (${updatedProfile.isCategoryRank ? 'Category' : 'AIR'})\nHome State: ${updatedProfile.homeState} | Mode: ${updatedProfile.isCSAB ? 'JoSAA + CSAB' : 'JoSAA Only'}`;
      
      const options = predictColleges(updatedProfile as StudentProfile);
      
      setMessages(prev => [
        ...prev, 
        { id: Date.now().toString(), sender: 'ai', text: aiResponse, isPredicting: true, options }
      ]);
      setProfile({}); 
      setIsTyping(false);
      return;
    } else {
       aiResponse = "To generate a new strategy report, please tell me your Rank Type:";
       quickReplies = ['AIR (All India Rank)', 'Category Rank'];
       setProfile({});
    }

    setProfile(updatedProfile);
    setIsTyping(false);
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'ai', text: aiResponse, quickReplies }]);
  };

  const renderMessageContent = (msg: Message) => {
    if (msg.isPredicting && msg.options) {
      return (
        <div>
          <p style={{ whiteSpace: 'pre-wrap', marginBottom: '1rem' }}>{msg.text}</p>
          <table className="strategy-table">
            <thead>
              <tr>
                <th>Priority</th>
                <th>College & Branch</th>
                <th>Status</th>
                <th>Closing Rank</th>
                <th>Admission Prob.</th>
                <th>Trend Analysis</th>
              </tr>
            </thead>
            <tbody>
              {msg.options.map((opt, i) => (
                <tr key={i} className={`row-${opt.status.toLowerCase()}`}>
                  <td style={{ textAlign: 'center', fontWeight: 700 }}>{opt.priority}</td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{opt.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{opt.branch}</div>
                  </td>
                  <td>
                    <span className={`badge ${opt.status.toLowerCase()}`}>
                       {opt.status === 'Safe' && '🟢 '}
                       {opt.status === 'Target' && '🟡 '}
                       {opt.status === 'Reach' && '🟣 '}
                       {opt.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 600 }}>{opt.closingRank.toLocaleString()}</td>
                  <td style={{ fontWeight: 600, color: 'var(--accent)' }}>{opt.probability}</td>
                  <td style={{ fontSize: '0.85rem' }}>{opt.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="strategy-note">
             <h4>🚀 Final Strategy Note: Choice Filling Order</h4>
             <p>For the most successful counseling outcome, place the <strong>Reach (Purple)</strong> colleges at the top of your choice list (Positions 1-3) and the <strong>Safe (Green)</strong> colleges at the bottom. This maximizes your chances of an upgrade during JoSAA rounds without losing a seat.</p>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            Would you like to analyze another rank or scenario? 
            <button className="inline-restart" onClick={handleRestart}>Start New Strategy</button>
          </p>
        </div>
      );
    }
    
    return (
      <div>
        <span style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>
        {msg.quickReplies && (
          <div className="quick-options">
            {msg.quickReplies.map((reply, i) => (
              <button key={i} className="quick-btn" onClick={() => handleSend(reply)}>
                {reply}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '50%' }}>
              <GraduationCap size={24} color="white" />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>RankNest AI</h2>
              <span style={{ fontSize: '0.85rem', color: 'var(--safe)' }}>● Active Strategist</span>
            </div>
          </div>
          <button 
            className="restart-btn" 
            onClick={handleRestart}
            title="Restart Counseling Session"
          >
            <RotateCcw size={18} />
            <span>Restart</span>
          </button>
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
