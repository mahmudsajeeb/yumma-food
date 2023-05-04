import React from 'react'
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
function Blog() {
//   function generatePDF() {
//   const docDefinition = {
//     content: [
//       { text: 'My PDF', style: 'header' },
//       { text: 'This is an example PDF generated with pdfmake and React', style: 'subheader' },
//       {
//         table: {
//           headerRows: 1,
//           widths: ['*', 'auto', 100, '*'],
//           body: [
//             ['First Name', 'Last Name', 'Age', 'Email'],
//             ['John', 'Doe', 30, 'john@example.com'],
//             ['Jane', 'Doe', 25, 'jane@example.com'],
//             ['Bob', 'Smith', 50, 'bob@example.com'],
//           ]
//         }
//       }
//     ],
//     styles: {
//       header: {
//         fontSize: 18,
//         bold: true,
//         margin: [0, 0, 0, 10]
//       },
//       subheader: {
//         fontSize: 14,
//         bold: true,
//         margin: [0, 10, 0, 5]
//       }
//     }
//   };

//   pdfMake.createPdf(docDefinition).download();
// }
  return (
    <>
      <div className='text-end my-container'>
      {/* <button className='btn' onClick={generatePDF}>Generate PDF</button> */}
    </div>
  
    <div className='text-center my-container  '>
    
        <h1 className='text-4xl font-semibold'>Tell us the differences between uncontrolled and controlled components.</h1>
        <p>Controlled components are components that are explicitly managed by the application itself. They are created, updated, and destroyed by the application, and are typically tightly integrated with the rest of the system. Controlled components are often used to implement critical functionality within an application and can be customized and modified as needed.</p>

        <h1 className='text-4xl font-semibold'>How to validate React props using PropTypes</h1>
        <p>React is a popular JavaScript library for building user interfaces, and PropTypes is a built-in typechecking feature that allows you to validate the props passed to a component. Here are the steps to validate React props using PropTypes:</p>

        <h1 className='text-4xl font-semibold'>Tell us the difference between nodejs and express js.</h1>
        <p>
        Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser. It uses the V8 engine, which is the same engine used by Google Chrome to run JavaScript code, and provides a set of built-in modules for building network applications, file I/O, and other tasks. Node.js allows you to write server-side applications in JavaScript, which can be a powerful tool for developers who are already familiar with the language.

        Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of tools and utilities for building web applications, such as routing, middleware, and templating engines. Express.js is designed to simplify the process of building web applications by providing a set of conventions and best practices for structuring your code and handling common tasks.
                </p>

                <h1 className='text-4xl font-semibold'>What is a custom hook, and why will you create a custom hook?</h1>
                  <p>In React, a custom hook is a JavaScript function that allows you to encapsulate reusable logic and share it between different components. Custom hooks are a powerful tool for building composable and reusable code in React.

                  Custom hooks are created by prefixing the function name with "use" and using one or more built-in hooks to compose the logic. For example, you might create a custom hook called "useFetch" that uses the "useState" and "useEffect" hooks to fetch data from an API and update the component state:</p>
    </div>
    </>
  )
}

export default Blog