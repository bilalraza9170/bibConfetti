/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "pages_dashboard_reviewer_screens_three_jsx";
exports.ids = ["pages_dashboard_reviewer_screens_three_jsx"];
exports.modules = {

/***/ "./pages/dashboard/reviewer/screens/three.jsx":
/*!****************************************************!*\
  !*** ./pages/dashboard/reviewer/screens/three.jsx ***!
  \****************************************************/
/***/ (() => {

eval("// // import { OpenAI } from \"langchain/llms/openai\";\n// // import { FaissStore } from \"langchain/vectorstores/faiss\";\n// // import { OpenAIEmbeddings } from \"langchain/embeddings/openai\";\n// // import { loadQAStuffChain, loadQAMapReduceChain } from \"langchain/chains\";\n// // import express from 'express'\n// // import http from 'http'\n// // import { fileURLToPath } from \"url\";\n// // import path, {dirname} from 'path';\n// // import * as dotenv from 'dotenv'\n// // dotenv.config()\n// // const __filename = fileURLToPath(import.meta.url);\n// // const __dirname = dirname(__filename);\n// // const app = express();\n// // const port = 3000;\n// // /* Create HTTP server */\n// // http.createServer(app).listen(process.env.PORT)\n// // console.info('listening on port ' + process.env.PORT)\n// // app.listen(port, () => {\n// //   console.log(`Server is running on port ${port}`);\n// // });\n// // /* Get endpoint to check current status  */\n// // app.get('/api/health', async (req, res) => {\n// //   res.json({\n// //     success: true,\n// //     message: 'Server is healthy',\n// //   })\n// // })\n// // app.get('/ask', async (req, res) => {\n// //     try {\n// //         const llmA = new OpenAI({ modelName: \"gpt-3.5-turbo\"});\n// //         const chainA = loadQAStuffChain(llmA);\n// //         const directory = process.env.DIR //saved directory in .env file\n// //         const loadedVectorStore = await FaissStore.load(\n// //           directory,\n// //           new OpenAIEmbeddings()\n// //           );\n// //           const question = \"what is this article about?\"; //question goes here. \n// //           const result = await loadedVectorStore.similaritySearch(question, 1);\n// //           const resA = await chainA.call({\n// //             input_documents: result,\n// //             question,\n// //           });\n// //           // console.log({ resA });\n// //           res.json({ result: resA }); // Send the response as JSON\n// //     } \n// //       catch (error) {\n// //       console.error(error);\n// //       res.status(500).json({ error: 'Internal Server Error' }); // Send an error response\n// //     }\n// //   });\n// import { OpenAI } from \"@langchain/openai\";\n// import { FaissStore } from \"@langchain/community/vectorstores/faiss\";\n// // import { OpenAIEmbeddings } from \"@langchain/openai\";\n// import { OpenAIEmbeddings } from \"@langchain/openai\";\n// import { loadQAStuffChain, loadQAMapReduceChain } from \"langchain/chains\";\n// import express from 'express'\n// import http from 'http'\n// import { fileURLToPath } from \"url\";\n// import path, {dirname} from 'path';\n// dotenv.config()\n// import * as dotenv from 'dotenv'\n// const __filename = fileURLToPath(import.meta.url);\n// const __dirname = dirname(__filename);\n// const app = express();\n// const port = 3000;\n// /* Create HTTP server */\n// http.createServer(app).listen(process.env.PORT)\n// console.info('listening on port ' + process.env.PORT)\n// app.listen(port, () => {\n//   console.log(`Server is running on port ${port}`);\n// });\n// /* Get endpoint to check current status  */\n// app.get('/api/health', async (req, res) => {\n//   res.json({\n//     success: true,\n//     message: 'Server is healthy',\n//   })\n// })\n// app.get('/ask', async (req, res) => {\n//     try {\n//         const llmA = new OpenAI({ modelName: \"gpt-3.5-turbo\"});\n//         const chainA = loadQAStuffChain(llmA);\n//         const directory = process.env.DIR //saved directory in .env file\n//         const loadedVectorStore = await FaissStore.load(\n//           directory,\n//           new OpenAIEmbeddings()\n//           );\n//           const question = \"what type of knowlegd i can get from this atricle whatever it is?\"; //question goes here. \n//           const result = await loadedVectorStore.similaritySearch(question, 1);\n//           const resA = await chainA.call({\n//             input_documents: result,\n//             question,\n//           });\n//           // console.log({ resA });\n//           res.json({ result: resA }); // Send the response as JSON\n//     } \n//       catch (error) {\n//       console.error(error);\n//       res.status(500).json({ error: 'Internal Server Error' }); // Send an error response\n//     }\n//   });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9kYXNoYm9hcmQvcmV2aWV3ZXIvc2NyZWVucy90aHJlZS5qc3g/MzMyNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBpbXBvcnQgeyBPcGVuQUkgfSBmcm9tIFwibGFuZ2NoYWluL2xsbXMvb3BlbmFpXCI7XHJcbi8vIC8vIGltcG9ydCB7IEZhaXNzU3RvcmUgfSBmcm9tIFwibGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcy9mYWlzc1wiO1xyXG4vLyAvLyBpbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSBcImxhbmdjaGFpbi9lbWJlZGRpbmdzL29wZW5haVwiO1xyXG4vLyAvLyBpbXBvcnQgeyBsb2FkUUFTdHVmZkNoYWluLCBsb2FkUUFNYXBSZWR1Y2VDaGFpbiB9IGZyb20gXCJsYW5nY2hhaW4vY2hhaW5zXCI7XHJcblxyXG4vLyAvLyBpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG4vLyAvLyBpbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG4vLyAvLyBpbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSBcInVybFwiO1xyXG4vLyAvLyBpbXBvcnQgcGF0aCwge2Rpcm5hbWV9IGZyb20gJ3BhdGgnO1xyXG4vLyAvLyBpbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52J1xyXG4vLyAvLyBkb3RlbnYuY29uZmlnKClcclxuLy8gLy8gY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuLy8gLy8gY29uc3QgX19kaXJuYW1lID0gZGlybmFtZShfX2ZpbGVuYW1lKTtcclxuLy8gLy8gY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG4vLyAvLyBjb25zdCBwb3J0ID0gMzAwMDtcclxuXHJcbi8vIC8vIC8qIENyZWF0ZSBIVFRQIHNlcnZlciAqL1xyXG4vLyAvLyBodHRwLmNyZWF0ZVNlcnZlcihhcHApLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUKVxyXG4vLyAvLyBjb25zb2xlLmluZm8oJ2xpc3RlbmluZyBvbiBwb3J0ICcgKyBwcm9jZXNzLmVudi5QT1JUKVxyXG5cclxuLy8gLy8gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbi8vIC8vICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG4vLyAvLyB9KTtcclxuXHJcbi8vIC8vIC8qIEdldCBlbmRwb2ludCB0byBjaGVjayBjdXJyZW50IHN0YXR1cyAgKi9cclxuLy8gLy8gYXBwLmdldCgnL2FwaS9oZWFsdGgnLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuLy8gLy8gICByZXMuanNvbih7XHJcbi8vIC8vICAgICBzdWNjZXNzOiB0cnVlLFxyXG4vLyAvLyAgICAgbWVzc2FnZTogJ1NlcnZlciBpcyBoZWFsdGh5JyxcclxuLy8gLy8gICB9KVxyXG4vLyAvLyB9KVxyXG5cclxuLy8gLy8gYXBwLmdldCgnL2FzaycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAvLyAgICAgdHJ5IHtcclxuICBcclxuLy8gLy8gICAgICAgICBjb25zdCBsbG1BID0gbmV3IE9wZW5BSSh7IG1vZGVsTmFtZTogXCJncHQtMy41LXR1cmJvXCJ9KTtcclxuLy8gLy8gICAgICAgICBjb25zdCBjaGFpbkEgPSBsb2FkUUFTdHVmZkNoYWluKGxsbUEpO1xyXG4vLyAvLyAgICAgICAgIGNvbnN0IGRpcmVjdG9yeSA9IHByb2Nlc3MuZW52LkRJUiAvL3NhdmVkIGRpcmVjdG9yeSBpbiAuZW52IGZpbGVcclxuICAgICAgICBcclxuLy8gLy8gICAgICAgICBjb25zdCBsb2FkZWRWZWN0b3JTdG9yZSA9IGF3YWl0IEZhaXNzU3RvcmUubG9hZChcclxuLy8gLy8gICAgICAgICAgIGRpcmVjdG9yeSxcclxuLy8gLy8gICAgICAgICAgIG5ldyBPcGVuQUlFbWJlZGRpbmdzKClcclxuLy8gLy8gICAgICAgICAgICk7XHJcbiAgICAgICAgICBcclxuLy8gLy8gICAgICAgICAgIGNvbnN0IHF1ZXN0aW9uID0gXCJ3aGF0IGlzIHRoaXMgYXJ0aWNsZSBhYm91dD9cIjsgLy9xdWVzdGlvbiBnb2VzIGhlcmUuIFxyXG4vLyAvLyAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbG9hZGVkVmVjdG9yU3RvcmUuc2ltaWxhcml0eVNlYXJjaChxdWVzdGlvbiwgMSk7XHJcbi8vIC8vICAgICAgICAgICBjb25zdCByZXNBID0gYXdhaXQgY2hhaW5BLmNhbGwoe1xyXG4vLyAvLyAgICAgICAgICAgICBpbnB1dF9kb2N1bWVudHM6IHJlc3VsdCxcclxuLy8gLy8gICAgICAgICAgICAgcXVlc3Rpb24sXHJcbi8vIC8vICAgICAgICAgICB9KTtcclxuLy8gLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgcmVzQSB9KTtcclxuLy8gLy8gICAgICAgICAgIHJlcy5qc29uKHsgcmVzdWx0OiByZXNBIH0pOyAvLyBTZW5kIHRoZSByZXNwb25zZSBhcyBKU09OXHJcbi8vIC8vICAgICB9IFxyXG4gICAgICBcclxuLy8gLy8gICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbi8vIC8vICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAvLyAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyB9KTsgLy8gU2VuZCBhbiBlcnJvciByZXNwb25zZVxyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyAgIH0pO1xyXG5cclxuXHJcbi8vIGltcG9ydCB7IE9wZW5BSSB9IGZyb20gXCJAbGFuZ2NoYWluL29wZW5haVwiO1xyXG4vLyBpbXBvcnQgeyBGYWlzc1N0b3JlIH0gZnJvbSBcIkBsYW5nY2hhaW4vY29tbXVuaXR5L3ZlY3RvcnN0b3Jlcy9mYWlzc1wiO1xyXG4vLyAvLyBpbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSBcIkBsYW5nY2hhaW4vb3BlbmFpXCI7XHJcbi8vIGltcG9ydCB7IE9wZW5BSUVtYmVkZGluZ3MgfSBmcm9tIFwiQGxhbmdjaGFpbi9vcGVuYWlcIjtcclxuLy8gaW1wb3J0IHsgbG9hZFFBU3R1ZmZDaGFpbiwgbG9hZFFBTWFwUmVkdWNlQ2hhaW4gfSBmcm9tIFwibGFuZ2NoYWluL2NoYWluc1wiO1xyXG5cclxuLy8gaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcclxuLy8gaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCdcclxuLy8gaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gXCJ1cmxcIjtcclxuLy8gaW1wb3J0IHBhdGgsIHtkaXJuYW1lfSBmcm9tICdwYXRoJztcclxuLy8gZG90ZW52LmNvbmZpZygpXHJcbi8vIGltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnXHJcblxyXG4vLyBjb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xyXG4vLyBjb25zdCBfX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG4vLyBjb25zdCBhcHAgPSBleHByZXNzKCk7XHJcbi8vIGNvbnN0IHBvcnQgPSAzMDAwO1xyXG5cclxuLy8gLyogQ3JlYXRlIEhUVFAgc2VydmVyICovXHJcbi8vIGh0dHAuY3JlYXRlU2VydmVyKGFwcCkubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQpXHJcbi8vIGNvbnNvbGUuaW5mbygnbGlzdGVuaW5nIG9uIHBvcnQgJyArIHByb2Nlc3MuZW52LlBPUlQpXHJcblxyXG4vLyBhcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhgU2VydmVyIGlzIHJ1bm5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gLyogR2V0IGVuZHBvaW50IHRvIGNoZWNrIGN1cnJlbnQgc3RhdHVzICAqL1xyXG4vLyBhcHAuZ2V0KCcvYXBpL2hlYWx0aCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgIHJlcy5qc29uKHtcclxuLy8gICAgIHN1Y2Nlc3M6IHRydWUsXHJcbi8vICAgICBtZXNzYWdlOiAnU2VydmVyIGlzIGhlYWx0aHknLFxyXG4vLyAgIH0pXHJcbi8vIH0pXHJcblxyXG4vLyBhcHAuZ2V0KCcvYXNrJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4gIFxyXG4vLyAgICAgICAgIGNvbnN0IGxsbUEgPSBuZXcgT3BlbkFJKHsgbW9kZWxOYW1lOiBcImdwdC0zLjUtdHVyYm9cIn0pO1xyXG4vLyAgICAgICAgIGNvbnN0IGNoYWluQSA9IGxvYWRRQVN0dWZmQ2hhaW4obGxtQSk7XHJcbi8vICAgICAgICAgY29uc3QgZGlyZWN0b3J5ID0gcHJvY2Vzcy5lbnYuRElSIC8vc2F2ZWQgZGlyZWN0b3J5IGluIC5lbnYgZmlsZVxyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGNvbnN0IGxvYWRlZFZlY3RvclN0b3JlID0gYXdhaXQgRmFpc3NTdG9yZS5sb2FkKFxyXG4vLyAgICAgICAgICAgZGlyZWN0b3J5LFxyXG4vLyAgICAgICAgICAgbmV3IE9wZW5BSUVtYmVkZGluZ3MoKVxyXG4vLyAgICAgICAgICAgKTtcclxuICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBcIndoYXQgdHlwZSBvZiBrbm93bGVnZCBpIGNhbiBnZXQgZnJvbSB0aGlzIGF0cmljbGUgd2hhdGV2ZXIgaXQgaXM/XCI7IC8vcXVlc3Rpb24gZ29lcyBoZXJlLiBcclxuLy8gICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGxvYWRlZFZlY3RvclN0b3JlLnNpbWlsYXJpdHlTZWFyY2gocXVlc3Rpb24sIDEpO1xyXG4vLyAgICAgICAgICAgY29uc3QgcmVzQSA9IGF3YWl0IGNoYWluQS5jYWxsKHtcclxuLy8gICAgICAgICAgICAgaW5wdXRfZG9jdW1lbnRzOiByZXN1bHQsXHJcbi8vICAgICAgICAgICAgIHF1ZXN0aW9uLFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IHJlc0EgfSk7XHJcbi8vICAgICAgICAgICByZXMuanNvbih7IHJlc3VsdDogcmVzQSB9KTsgLy8gU2VuZCB0aGUgcmVzcG9uc2UgYXMgSlNPTlxyXG4vLyAgICAgfSBcclxuICAgICAgXHJcbi8vICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7IC8vIFNlbmQgYW4gZXJyb3IgcmVzcG9uc2VcclxuLy8gICAgIH1cclxuLy8gICB9KTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBQ3JELGdFQUFnRTtBQUNoRSxxRUFBcUU7QUFDckUsZ0ZBQWdGO0FBRWhGLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsMENBQTBDO0FBQzFDLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMscUJBQXFCO0FBQ3JCLHdEQUF3RDtBQUN4RCw0Q0FBNEM7QUFDNUMsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUV4Qiw4QkFBOEI7QUFDOUIscURBQXFEO0FBQ3JELDJEQUEyRDtBQUUzRCw4QkFBOEI7QUFDOUIseURBQXlEO0FBQ3pELFNBQVM7QUFFVCxpREFBaUQ7QUFDakQsa0RBQWtEO0FBQ2xELGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLFVBQVU7QUFDVixRQUFRO0FBRVIsMkNBQTJDO0FBQzNDLGVBQWU7QUFFZixxRUFBcUU7QUFDckUsb0RBQW9EO0FBQ3BELDhFQUE4RTtBQUU5RSw4REFBOEQ7QUFDOUQsMEJBQTBCO0FBQzFCLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFFbEIsc0ZBQXNGO0FBQ3RGLHFGQUFxRjtBQUNyRixnREFBZ0Q7QUFDaEQsMENBQTBDO0FBQzFDLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIseUNBQXlDO0FBQ3pDLHdFQUF3RTtBQUN4RSxZQUFZO0FBRVosMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywrRkFBK0Y7QUFDL0YsV0FBVztBQUNYLFdBQVc7QUFHWCw4Q0FBOEM7QUFDOUMsd0VBQXdFO0FBQ3hFLDJEQUEyRDtBQUMzRCx3REFBd0Q7QUFDeEQsNkVBQTZFO0FBRTdFLGdDQUFnQztBQUNoQywwQkFBMEI7QUFDMUIsdUNBQXVDO0FBQ3ZDLHNDQUFzQztBQUN0QyxrQkFBa0I7QUFDbEIsbUNBQW1DO0FBRW5DLHFEQUFxRDtBQUNyRCx5Q0FBeUM7QUFDekMseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUVyQiwyQkFBMkI7QUFDM0Isa0RBQWtEO0FBQ2xELHdEQUF3RDtBQUV4RCwyQkFBMkI7QUFDM0Isc0RBQXNEO0FBQ3RELE1BQU07QUFFTiw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsb0NBQW9DO0FBQ3BDLE9BQU87QUFDUCxLQUFLO0FBRUwsd0NBQXdDO0FBQ3hDLFlBQVk7QUFFWixrRUFBa0U7QUFDbEUsaURBQWlEO0FBQ2pELDJFQUEyRTtBQUUzRSwyREFBMkQ7QUFDM0QsdUJBQXVCO0FBQ3ZCLG1DQUFtQztBQUNuQyxlQUFlO0FBRWYseUhBQXlIO0FBQ3pILGtGQUFrRjtBQUNsRiw2Q0FBNkM7QUFDN0MsdUNBQXVDO0FBQ3ZDLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsc0NBQXNDO0FBQ3RDLHFFQUFxRTtBQUNyRSxTQUFTO0FBRVQsd0JBQXdCO0FBQ3hCLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsUUFBUTtBQUNSLFFBQVEiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQvcmV2aWV3ZXIvc2NyZWVucy90aHJlZS5qc3giLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard/reviewer/screens/three.jsx\n");

/***/ })

};
;