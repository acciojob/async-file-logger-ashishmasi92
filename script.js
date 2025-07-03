//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

async function hello(){

	try {
		for(let i=0;i<=fileNames.length-1;i++){
			let x = await fetch(fileNames[i])
			if(!x.ok){
				 throw new Error("Failed to fetch " + fileNames[i]);
			}

			let content = await x.text()
			console.log(content)
		}
	} catch (error) {
		console.log(error.message)
	}
}
hello()
// do not change the code above
// add your code here
