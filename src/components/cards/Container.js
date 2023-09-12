function Container({ children }) {
  return (
    <div className="bg-white w-[750px] h-[590px] p-0 mx-auto my-[35px] rounded-xl max-md:max-w-fit flex ">
      {children}
    </div>
  );
}

export default Container;
