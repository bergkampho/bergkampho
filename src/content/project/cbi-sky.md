---
index: 5
title: CBI SKY
tags: ["full-stack", "cloud-services"]
image: "./img/cbi-sky.jpg"
---

## Overview

- Project: SKY (Cloud-Based CRM System for Pre-IPO Due Diligence Services)
- Client: [CBI](https://www.cbil.com.hk/)
- Technologies Used: React, [Microsoft Graph Excel APIs](https://learn.microsoft.com/en-us/graph/api/resources/excel?view=graph-rest-1.0), Node.js, [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database), Azure, [Auth0](https://auth0.com/platform/access-management)

## Challenges

- **Legacy Content Management:** The system needed to manage over 5,000 Due Diligence Services, which were originally stored in an Excel spreadsheet, while ensuring data integrity and real-time updates.

- **Proposal and Quotation Workflow:** The system needed to allow staff to create proposals by selecting multiple services, generate quotations, and seamlessly share them with customers.

## Solution

To meet these challenges, I implemented the following full-stack development solution:

**Administrative UI Workflow:** Designed and developed an intuitive, responsive front-end using a UI library, providing a clean and easy-to-navigate interface. The UI enabled staff to efficiently create and manage proposals, quotations, and reports with minimal effort.

**Cloud-Based Backend System:** Built a secure and scalable backend using Node.js, MongoDB Atlas and Azure, which powered the core functionalities of the CRM.

- **Microsoft Graph Excel API Integration:** Integrated Microsoft Graph APIs to sync data between the CRM and an Excel spreadsheet stored in OneDrive, ensuring the system always has the latest updates for the 5,000+ Due Diligence Services.

- **Azure Storage Integration:** Integrated Azure Storage for secure uploading and downloading of reports ensuring fast, global access to authorized users.

- **MongoDB Atlas Database:** Utilized MongoDB Atlas, a cloud-hosted database service, to ensure continuous data availability with built-in backup and failover mechanisms.

- **Auth0 Access Management:** Integrated user authentication with 2FA and role-based access control with Auth0, ensuring only authorized staff members and customers could access specific features and reports.

## Outcome

By leveraging a modern tech stack and cloud services, I delivered a highly secure, scalable, and efficient CRM system that enhanced data accuracy, and improved both staff and customer experience.

- **Efficiency:** The UI’s intuitive design and automated data syncing allowed staff to manage complex workflows quickly, reducing the time required for administrative tasks.

- **Security:** 2FA, role-based access, and secure cloud storage combined to protect sensitive data, giving staff and customer peace of mind.

- **Scalability:** The cloud-based infrastructure, including Node.js, MongoDB Atlas, and Azure Storage, ensured that the system could scale effortlessly to meet future growth and handle increasing user demands.

- **Reliability:** Hosting the backend and database in the cloud provided high availability, with built-in failover and redundancy to minimize downtime and ensure seamless operations.

This project demonstrated my full-stack development expertise, from front-end UI design to backend API development and cloud integration.
