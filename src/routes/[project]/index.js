export async function get({ params }) {
  if (!params.project.startsWith('project-')) {
    // this is NOT a [project]
    return {
      fallthrough: true,
    }
  }

  // okay
  return {
    body: {
      name: params.project.toUpperCase(),
    }
  }
}
