const ErrorPage = () => {
  return (
    <div className="h-full flex items-center justify-center bg-lost-white">
      <div className="flex flex-col items-center space-y-4 bg-lost-white">
        <h1 className="text-2xl font-bold text-lost-blue">Oops!</h1>
        <p className="text-xl text-lost-accent-dark">🚫Page NOT FOUND 🔎</p>
        <p className="text-xl text-lost-accent-dark">
          Something went wrong, <br />
          Try reloading the site again
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
