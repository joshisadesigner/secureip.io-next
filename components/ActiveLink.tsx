import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { Children } from 'react'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  // pages/index.js will be matched via props.href
  // pages/news.js will be matched via props.href
  // pages/new/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  console.log(asPath, href); /* /cloud-services */

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
}

export default ActiveLink