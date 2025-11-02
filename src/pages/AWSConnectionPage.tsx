import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AWSConnectionPage: React.FC = () => {
  const [roleArn, setRoleArn] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<{ type: 'success' | 'error' | null; message: string | null }>({
    type: null,
    message: null,
  });
  const navigate = useNavigate();

  // This would be fetched from the backend in a real scenario
  const externalId = 'dlight-external-id-placeholder'; 

  const handleConnect = async () => {
    if (roleArn.trim() === '') {
      setConnectionStatus({ type: 'error', message: 'Please enter a Role ARN.' });
      return;
    }

    setIsLoading(true);
    setConnectionStatus({ type: null, message: null });

    try {
      // Simulate API call to backend
      // In a real application, you would use fetch or axios here:
      // const response = await fetch('/api/aws/verify-connection', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ roleArn, externalId, projectId: 'some-project-id' }),
      // });
      // const data = await response.json();

      // Simulate network delay and backend response
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success or failure based on some condition (e.g., a specific ARN for testing)
      if (roleArn.includes('success')) { // For demonstration: ARN containing 'success' will pass
        setConnectionStatus({ type: 'success', message: 'AWS account connected successfully!' });
        // In a real app, you might navigate to the project page after success
        // navigate('/projects/some-project-id'); 
      } else {
        setConnectionStatus({ type: 'error', message: 'Failed to connect. Please check your Role ARN and IAM role settings (especially External ID and permissions).' });
      }
    } catch (error) {
      console.error('Connection error:', error);
      setConnectionStatus({ type: 'error', message: 'An unexpected error occurred during connection.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Connect to AWS</h1>
      <p>Follow these steps to connect your AWS account for automated deployment.</p>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '5px', marginTop: '1rem' }}>
        <h3>Step 1: Configure IAM Role in your AWS Account</h3>
        <p>1. Sign in to your AWS Management Console and open the IAM console.</p>
        <p>2. In the navigation pane, choose <strong>Roles</strong>, and then choose <strong>Create role</strong>.</p>
        <p>3. For trusted entity type, select <strong>AWS account</strong>.</p>
        <p>4. Under 'An AWS account', select <strong>Another AWS account</strong> and enter the Account ID below:</p>
        <p><strong>495236580665</strong> (D-light's AWS Account ID)</p>
        <p>5. Under 'Options', check the box for <strong>Require external ID</strong> and enter the following value:</p>
        <p><strong>{externalId}</strong></p>
        <p>6. Attach the necessary permissions policies required for deployment (e.g., for Amazon S3, CloudFront).</p>
        <p>7. Complete the role creation process and copy the generated <strong>Role ARN</strong>.</p>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Step 2: Submit the Role ARN</h3>
        <p>Paste the Role ARN you copied from the AWS console in the field below.</p>
        <input
          type="text"
          value={roleArn}
          onChange={(e) => setRoleArn(e.target.value)}
          placeholder="arn:aws:iam::123456789012:role/YourRoleName"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          disabled={isLoading}
        />
      </div>

      <button 
        onClick={handleConnect} 
        style={{
          marginTop: '20px', 
          padding: '10px 20px',
          backgroundColor: isLoading ? '#cccccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
        disabled={isLoading}
      >
        {isLoading ? 'Connecting...' : 'Verify & Connect'}
      </button>

      {connectionStatus.message && (
        <div 
          style={{
            marginTop: '20px',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: connectionStatus.type === 'success' ? '#d4edda' : '#f8d7da',
            color: connectionStatus.type === 'success' ? '#155724' : '#721c24',
            borderColor: connectionStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb',
            border: '1px solid',
          }}
        >
          {connectionStatus.message}
          {connectionStatus.type === 'success' && (
            <button 
              onClick={() => navigate('/dashboard')} 
              style={{
                marginLeft: '15px',
                padding: '5px 10px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
            >
              Go to Dashboard
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AWSConnectionPage;