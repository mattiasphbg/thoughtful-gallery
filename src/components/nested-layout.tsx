

interface Props {
    children: React.ReactNode;
  }
  
  export default function nestedLayout({ children }: Props) {
    return (
        <>
  
       
        <main>
          {children}
        </main>
        
     
        </>
    );
  }