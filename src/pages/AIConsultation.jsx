import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Eye, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const AIConsultation = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm Dr. Vision AI, your virtual eye care specialist. I'm here to help you with questions about your vision, eye health, and symptoms. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined responses for common eye-related queries
  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Eye strain/computer vision
    if (message.includes('eye strain') || message.includes('tired eyes') || message.includes('computer') || message.includes('screen')) {
      return {
        content: "Computer eye strain is very common! Here are my recommendations:\n\n• Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds\n• Ensure proper lighting - avoid glare on your screen\n• Blink frequently to keep eyes moist\n• Consider blue light filtering glasses\n• Adjust screen brightness to match your surroundings\n• Take regular breaks from screen work\n\nIf symptoms persist, consider a comprehensive eye exam to rule out underlying vision problems.",
        type: 'advice'
      };
    }
    
    // Dry eyes
    if (message.includes('dry eyes') || message.includes('dry eye') || message.includes('itchy eyes')) {
      return {
        content: "Dry eyes can be quite uncomfortable. Here's what I recommend:\n\n• Use preservative-free artificial tears regularly\n• Increase humidity in your environment\n• Stay well hydrated\n• Take omega-3 supplements\n• Avoid direct air flow from fans or AC\n• Consider warm compresses for 10-15 minutes daily\n\nIf symptoms are severe or persistent, you may have dry eye syndrome and should see an eye care professional for specialized treatment options.",
        type: 'advice'
      };
    }
    
    // Blurry vision
    if (message.includes('blurry') || message.includes('blur') || message.includes('vision problems')) {
      return {
        content: "Blurry vision can have several causes and should be evaluated promptly:\n\n**Possible causes:**\n• Refractive errors (nearsightedness, farsightedness, astigmatism)\n• Eye strain or fatigue\n• Dry eyes\n• Changes in blood sugar\n• Medication side effects\n\n**When to seek immediate care:**\n• Sudden onset of blurry vision\n• Vision loss in one or both eyes\n• Accompanied by eye pain, headache, or nausea\n\nI recommend scheduling an eye exam to determine the exact cause and appropriate treatment.",
        type: 'warning'
      };
    }
    
    // Headaches
    if (message.includes('headache') || message.includes('head pain')) {
      return {
        content: "Eye-related headaches are often caused by:\n\n• Uncorrected vision problems\n• Eye strain from prolonged near work\n• Improper lighting\n• Poor posture while reading/working\n• Astigmatism\n\n**Relief strategies:**\n• Take frequent breaks from close work\n• Ensure proper lighting\n• Check if you need glasses or an updated prescription\n• Practice good posture\n• Consider computer glasses\n\nIf headaches are frequent or severe, both an eye exam and consultation with your primary care physician are recommended.",
        type: 'advice'
      };
    }
    
    // Floaters
    if (message.includes('floaters') || message.includes('spots') || message.includes('moving')) {
      return {
        content: "Eye floaters are usually normal, but let me explain:\n\n**Normal floaters:**\n• Small, moving spots in your vision\n• More noticeable against bright backgrounds\n• Usually harmless and part of aging\n\n**When to seek immediate care:**\n• Sudden increase in floaters\n• Flashes of light\n• Curtain or shadow in peripheral vision\n• Recent eye injury\n\nThese could indicate retinal detachment, which requires emergency treatment. For routine floaters, mention them at your next eye exam.",
        type: 'warning'
      };
    }
    
    // Night vision
    if (message.includes('night vision') || message.includes('dark') || message.includes('driving at night')) {
      return {
        content: "Difficulty with night vision can be concerning:\n\n**Common causes:**\n• Uncorrected refractive errors\n• Cataracts\n• Vitamin A deficiency\n• Retinal conditions\n• Normal aging changes\n\n**Safety tips:**\n• Avoid driving at night if vision is significantly impaired\n• Ensure your glasses prescription is current\n• Keep windshields clean\n• Reduce dashboard lighting\n• Look slightly to the side of oncoming headlights\n\nI strongly recommend an eye exam to evaluate your night vision concerns, especially if they're affecting your daily activities.",
        type: 'warning'
      };
    }
    
    // Color vision
    if (message.includes('color') || message.includes('colors')) {
      return {
        content: "Color vision concerns are important to address:\n\n**Types of color vision deficiency:**\n• Red-green color blindness (most common)\n• Blue-yellow color blindness (rare)\n• Complete color blindness (very rare)\n\n**Our color blindness test can help screen for:**\n• Difficulty distinguishing certain colors\n• Inherited color vision deficiencies\n• Acquired color vision problems\n\nIf you haven't taken our color vision test yet, I recommend starting there. For comprehensive evaluation, especially if you suspect acquired color vision changes, see an eye care professional.",
        type: 'info'
      };
    }
    
    // General eye exam questions
    if (message.includes('eye exam') || message.includes('when should') || message.includes('how often')) {
      return {
        content: "Regular eye exams are crucial for maintaining good vision and eye health:\n\n**Recommended frequency:**\n• Ages 18-39: Every 2-3 years\n• Ages 40-54: Every 1-2 years\n• Ages 55-64: Every 1-2 years\n• Ages 65+: Annually\n\n**More frequent exams needed if you have:**\n• Diabetes\n• High blood pressure\n• Family history of eye disease\n• Previous eye injuries\n• High prescription glasses/contacts\n\nOur screening tests are helpful, but they don't replace comprehensive professional eye exams that include pupil dilation and pressure checks.",
        type: 'info'
      };
    }
    
    // Emergency symptoms
    if (message.includes('pain') || message.includes('sudden') || message.includes('emergency')) {
      return {
        content: "⚠️ **SEEK IMMEDIATE MEDICAL ATTENTION if you experience:**\n\n• Sudden vision loss\n• Severe eye pain\n• Sudden onset of many floaters\n• Flashes of light\n• Curtain or shadow in vision\n• Chemical splash in eyes\n• Significant eye injury\n• Sudden double vision\n• Severe headache with vision changes\n\n**Go to the emergency room or call an eye care professional immediately.**\n\nFor non-emergency concerns, I'm here to help with general advice and guidance.",
        type: 'emergency'
      };
    }
    
    // Default response
    return {
      content: "Thank you for your question about eye health. While I can provide general information and guidance, I'd recommend:\n\n• Taking our vision screening tests if you haven't already\n• Scheduling a comprehensive eye exam with a qualified eye care professional\n• Keeping track of any symptoms or changes in your vision\n\nIs there a specific aspect of your vision or eye health you'd like to discuss? I can provide more targeted advice based on your concerns.",
      type: 'info'
    };
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = getAIResponse(inputMessage);
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: aiResponse.content,
        messageType: aiResponse.type,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "I have eye strain from computer work",
    "My eyes feel dry and irritated",
    "I'm experiencing blurry vision",
    "I see floaters in my vision",
    "When should I get an eye exam?",
    "I have trouble seeing at night"
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getMessageIcon = (messageType) => {
    switch (messageType) {
      case 'warning':
        return <AlertCircle className="message-type-icon warning" />;
      case 'advice':
        return <CheckCircle className="message-type-icon advice" />;
      case 'emergency':
        return <AlertCircle className="message-type-icon emergency" />;
      default:
        return <Eye className="message-type-icon info" />;
    }
  };

  return (
    <div className="ai-consultation">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">AI Eye Specialist Consultation</h1>
          <p className="page-subtitle">
            Get expert guidance on your vision and eye health concerns
          </p>
        </div>

        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-avatar">
                  {message.type === 'bot' ? <Bot /> : <User />}
                </div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">
                      {message.type === 'bot' ? 'Dr. Vision AI' : 'You'}
                    </span>
                    <span className="message-time">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <div className="message-body">
                    {message.messageType && getMessageIcon(message.messageType)}
                    <div className="message-text">
                      {message.content.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < message.content.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot typing">
                <div className="message-avatar">
                  <Bot />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="quick-questions">
            <h4>Quick Questions:</h4>
            <div className="quick-questions-grid">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="quick-question-btn"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="chat-input">
            <div className="input-container">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about your vision concerns, symptoms, or eye health questions..."
                className="message-input"
                rows="3"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="send-button"
              >
                <Send />
              </button>
            </div>
          </div>
        </div>

        <div className="disclaimer-section">
          <div className="disclaimer-card">
            <h4>Important Medical Disclaimer</h4>
            <p>
              This AI consultation provides general information and guidance only. It is not a substitute for professional medical advice, 
              diagnosis, or treatment. Always seek the advice of qualified eye care professionals for any vision concerns or eye health issues. 
              In case of emergency eye symptoms, seek immediate medical attention.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ai-consultation {
          min-height: 100vh;
          padding-bottom: 60px;
        }

        .chat-container {
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          margin-bottom: 40px;
        }

        .chat-messages {
          height: 500px;
          overflow-y: auto;
          padding: 30px;
          background: #f9fafb;
        }

        .message {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          align-items: flex-start;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .message.user .message-avatar {
          background: #e5e7eb;
          color: #374151;
        }

        .message-content {
          flex: 1;
          max-width: 70%;
        }

        .message.user .message-content {
          text-align: right;
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .message.user .message-header {
          flex-direction: row-reverse;
        }

        .message-sender {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .message-time {
          color: #9ca3af;
          font-size: 0.8rem;
        }

        .message-body {
          background: white;
          padding: 16px 20px;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .message.user .message-body {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          justify-content: flex-end;
        }

        .message-type-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .message-type-icon.warning {
          color: #f59e0b;
        }

        .message-type-icon.advice {
          color: #10b981;
        }

        .message-type-icon.emergency {
          color: #ef4444;
        }

        .message-type-icon.info {
          color: #667eea;
        }

        .message-text {
          line-height: 1.6;
          flex: 1;
        }

        .message.user .message-text {
          text-align: left;
        }

        .typing {
          opacity: 0.7;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 16px 20px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }

        .quick-questions {
          padding: 30px;
          border-top: 1px solid #e5e7eb;
          background: white;
        }

        .quick-questions h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
          margin: 0 0 16px 0;
        }

        .quick-questions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 12px;
        }

        .quick-question-btn {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          color: #374151;
        }

        .quick-question-btn:hover {
          background: #e5e7eb;
          border-color: #667eea;
          color: #667eea;
        }

        .chat-input {
          padding: 30px;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .input-container {
          display: flex;
          gap: 16px;
          align-items: flex-end;
        }

        .message-input {
          flex: 1;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 16px;
          font-size: 1rem;
          resize: none;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .message-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .send-button {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .disclaimer-section {
          margin-top: 40px;
        }

        .disclaimer-card {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 16px;
          padding: 30px;
          text-align: center;
        }

        .disclaimer-card h4 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #dc2626;
          margin: 0 0 16px 0;
        }

        .disclaimer-card p {
          color: #991b1b;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .chat-messages {
            height: 400px;
            padding: 20px;
          }

          .message-content {
            max-width: 85%;
          }

          .quick-questions {
            padding: 20px;
          }

          .quick-questions-grid {
            grid-template-columns: 1fr;
          }

          .chat-input {
            padding: 20px;
          }

          .input-container {
            flex-direction: column;
            align-items: stretch;
          }

          .send-button {
            align-self: flex-end;
          }

          .disclaimer-card {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default AIConsultation;