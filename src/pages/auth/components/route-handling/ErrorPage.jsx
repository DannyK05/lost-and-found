export const ErrorPage = () => {
  return (
    <div className="flex bg-lost-white items-center justify-center h-full ">
      <div className="flex  items-center bg-lost-white space-y-4 flex-col">
        <h1 className="text-2xl font-bold text-lost-blue">Oops!</h1>
        <p className="text-xl text-lost-accent-dark">🚫Page NOT FOUND 🔎</p>
        <p className="text-xl text-lost-accent-dark">
          Something went wrong, <br />
          Try running the site again
        </p>
      </div>
    </div>
  );
};
