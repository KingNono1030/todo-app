function Button({ children, onClick }) {
  return (
    <button
      className="py-1 px-1.5 ml-2.5 border-none rounded
       bg-primary hover:bg-primary-light text-white cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
