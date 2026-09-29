import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="page contact-page">
      <h2>Contact <span>Me</span></h2>

      <div className="contact-wrapper">
        <div className="contact-info-col">
          <h3>Get in touch</h3>
          <p>
            Feel free to reach out for collaborations, projects, or just to say hello.
          </p>
          <div className="contact-item">
            <div className="contact-item-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>24CE079@charusat.edu.in</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">💻</div>
            <div>
              <h4>GitHub</h4>
              <p>github.com</p>
            </div>
          </div>
          <button
            className="help-toggle"
            onClick={() => setShowHelp(!showHelp)}
          >
            {showHelp ? 'Hide Help' : 'Need Help?'}
          </button>
          {showHelp && (
            <div className="help-tooltip">
              <p>Tip: Keep your message short and mention your project idea or topic.</p>
            </div>
          )}
        </div>

        <div className="contact-form-col">
          <h3>Send a message</h3>
          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-row">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
            </div>
            <input
              type="text"
              placeholder="Subject"
            />
            <textarea
              rows="5"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="char-count">{message.length} characters</p>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
