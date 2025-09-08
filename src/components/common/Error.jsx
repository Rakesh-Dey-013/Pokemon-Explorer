import { GiCancel } from 'react-icons/gi';

const Error = ({ message = 'Failed to load data' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-red-400">
      <GiCancel className="text-6xl mb-4" />
      <h2 className="text-2xl font-bold mb-2">Oops! Something went wrong</h2>
      <p className="text-lg text-center max-w-md">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-red-500/20 border border-red-500 rounded-lg hover:bg-red-500/30 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;