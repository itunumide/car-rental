

const StepNavigation = ({
  itemsPerPage,
  totalCars,
  currentPage,
  setCurrentPage,
}) => {
  const totalSteps = Math.ceil(totalCars / itemsPerPage);

  return (
    <div className="flex items-center space-x-4">
      {currentPage > 1 && (
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 transition-all hover:bg-gray-200"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ←
        </button>
      )}
      {Array.from({ length: totalSteps }, (_, index) => index + 1).map(
        (step) => (
          <button
            key={step}
            className={`w-14 h-14 flex items-center  justify-center rounded-full border transition-all duration-200 ${
              currentPage === step
                ? "bg-yellow-400 text-black scale-110"
                : "border-gray-300 text-black hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(step)}
          >
            {step}
          </button>
        )
      )}
      {currentPage < totalSteps && (
        <button
          className="w-14 h-14 flex items-center justify-center rounded-full border border-gray-300 transition-all hover:bg-gray-200"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          →
        </button>
      )}
    </div>
  );
};

export default StepNavigation;
