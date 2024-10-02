import A from "./A";

const MainContainer = ({children, keywords}) => {
  return(
    <>
      <head>
        <meta keywords={'reactjs nextjs' + keywords}></meta>
        <title>Main Page</title>
      </head>
      <div className="navbar">
        <A href={'/'} text="Main Page"/>
        <A href={'/users'} text="Users"/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
          
        `}
      </style>
    </>
  )
}

export default MainContainer;