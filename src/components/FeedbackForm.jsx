import { useState } from 'react';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const [text, setText] = useState('text');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <form>
        <h2>how would you rate your service?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button onClick={handleFormSubmit} type='submit'>
            send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
