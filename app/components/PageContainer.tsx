import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

export const PageContainer: React.FC<ChildrenType> = ({ children }) => {
  return (
    <>
      <div className="max-w-[1280px] w-full px-[20px] py-0 xl:px-0 m-0 mx-auto">
        {children}
      </div>
    </>
  );
};
