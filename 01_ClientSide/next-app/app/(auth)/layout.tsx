const layout = ({children} : Readonly<{children: React.ReactNode}> ) => {
  return (
    <div>
      <div className=" border-b-2 ">
        UNIQ NAVBAR
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default layout;
