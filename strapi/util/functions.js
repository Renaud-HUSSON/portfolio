const slugify = (string) => {
  return string
    .replace(/[^a-z0-9]/gi, '-')
    .replace(/(^[^a-z0-9])|([^a-z0-9]$)/gi, '')
    .toLowerCase()
}

module.exports = { slugify }
