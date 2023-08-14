import { FC, ReactNode, HTMLAttributes } from "react"
import classes from "./Container.module.scss"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
}

const Container: FC<ContainerProps> = ({ children, className, ...rest }) => {
  let containerClassName = classes.container

  if (className) {
    containerClassName = `${containerClassName} ${className}`
  }

  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  )
}

export default Container
