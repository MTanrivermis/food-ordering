

const Title = ({ children, addClass }) => {
  return (
     //! classı props olarak addClass halinde yolladık.
    <div className={`${addClass} font-dancing font-bold`}>
      {children}
    </div>
  )
}

export default Title
