import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { notFound } from 'next/navigation'
import { useMDXComponents as getMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

function isStaticAssetPath(pathSegments) {
  const lastSegment = pathSegments?.[pathSegments.length - 1]
  if (!lastSegment) return false

  return /\.(?:ico|png|jpg|jpeg|svg|webp|gif|txt|xml|json|webmanifest)$/i.test(
    lastSegment
  )
}

export async function generateMetadata(props) {
  const params = await props.params
  if (isStaticAssetPath(params.mdxPath)) {
    notFound()
  }
  const { metadata } = await importPage(params.mdxPath)
  return metadata
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  if (isStaticAssetPath(params.mdxPath)) {
    notFound()
  }
  const {
    default: MDXContent,
    toc,
    metadata,
    sourceCode
  } = await importPage(params.mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
