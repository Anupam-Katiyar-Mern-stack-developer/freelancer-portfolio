const Loader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="flex items-center gap-3">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />

        <span className="text-sm font-semibold text-slate-600">
          Loading portfolio...
        </span>
      </div>
    </div>
  );
};

export default Loader;