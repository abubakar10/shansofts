import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for could not be found on Shansofts."
        path="/404"
        noindex
      />
      <section className="grid min-h-[70vh] place-items-center px-4">
        <div className="text-center">
          <p className="font-display text-7xl font-bold text-brand-600 sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-heading">Page not found</h1>
          <p className="mx-auto mt-2 max-w-md text-body">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link to="/" className="btn-primary mt-8">
            Back to home
          </Link>
        </div>
      </section>
    </>
  )
}
