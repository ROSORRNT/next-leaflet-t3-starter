import { forwardRef, ForwardRefRenderFunction, ReactNode } from "react"

import classes from "./Section.module.scss"

interface SectionProps {
  children: ReactNode
  className?: string
  // spread rest
  [key: string]: any // (any for any type of value)
}

const Section: ForwardRefRenderFunction<HTMLElement, SectionProps> = (
  props,
  ref
) => {
  const { children, className, ...rest } = props

  let sectionClassName = classes.section

  if (className) {
    sectionClassName = `${sectionClassName} ${className}`
  }

  return (
    <section
      ref={ref}
      className={sectionClassName}
      {...rest}
    >
      {children}
    </section>
  )
}
// in place of : const Section = forwardRef((props, ref) => {...})
export default forwardRef(Section)
