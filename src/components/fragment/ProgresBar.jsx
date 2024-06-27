import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgresBar({progres}) {
  return (
    <div>
      <ProgressBar style={{ 
        height: '0.3rem'
       }} variant="success" now={ progres } />
    </div>
  );
}

export default ProgresBar;