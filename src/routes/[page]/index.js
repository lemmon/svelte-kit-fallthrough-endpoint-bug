export async function get({ params }) {
  if (!params.page.startsWith('page-')) {
    // this is NOT a [page]
    return {
      fallthrough: true,
    }
  }

  // okay
  return {
    body: {
      name: params.page.toUpperCase(),
    }
  }
}
