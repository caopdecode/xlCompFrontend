# XlComp

## Description

This project is a web application that compares two Excel files. Taking the first file as a reference, it highlights the differences, allows you to update the second file, discard irrelevant differences, and download the updated file.

## Technologies Used

- Backend: Spring Boot, Java, Apache POI.
- Frontend: React with Vite.

## Test The Project

The backend is deployed on Railway, and the frontend is deployed on Vercel. To test the project, visit:

- https://xlcomp.vercel.app/

For a quick test, it is recommended to use the following files:

File 1:

- [xlComp.xlsx](https://github.com/user-attachments/files/18511717/xlComp.xlsx)

File 2:

- [xlComp_Copy.xlsx](https://github.com/user-attachments/files/18511719/xlComp_Copy.xlsx)

### Steps: 

1. Click on "Let's Go" button.
2. Click on "Compare" button.
3. Click on "Upload file 1" button and then choose "xlComp.xlsx" file.
4. Click on "Upload file 2" button and then choose "xlComp_Copy.xlsx" file.
5. Click on "Compare" button.
6. Analyze the differences and select the "pencil" button to update, or "garbage can" button to discard.
7. Once you update all the differences, click on "Download File" button.

Example: 

![XlComp](https://github.com/user-attachments/assets/365914c2-7c0d-411a-97e2-153199bc44ff)

![XlCompUse](https://github.com/user-attachments/assets/140551d9-1e95-4679-9540-e57f63646c0e)

![XlCompDownload](https://github.com/user-attachments/assets/98a76aff-d364-459d-86f2-cf8c1b47671a)



## Additional Notes
- This project was inspired by the needs of an insurance company to analyze Excel files containing customer lists and ensure that the data matched across both files.
- Through this project, I improved my knowledge of Spring Boot and learned new tools such as Apache POI and React.
- I need to implement validations to ensure the uploaded file has the correct extension.

