function generateTemplate(content = '', styles = '', scripts = '') {
  const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mx Assignment</title>
        <link rel="stylesheet" href="https://use.typekit.net/fau0ymt.css">
        ${styles}
      </head>
      <body>
          <div id="mx-assignment-container">${content}</div>
          ${scripts}
      </body>
    </html>
    `
    return html
}

export default generateTemplate