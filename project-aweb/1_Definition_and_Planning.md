# **Table of Contents**

1. [Phase 1 - Definition and Planning](#phase-1---definition-and-planning)  
   - [1. User Personas](#1-user-personas)  
   - [2. Use Cases and Usage Scenarios](#2-use-cases-and-usage-scenarios)  
   - [3. UI Prototypes](#3-ui-prototypes)  
   - [4. Information Architecture and Technical Design](#4-information-architecture-and-technical-design)  
   - [5. Project Management and User Testing](#5-project-management-and-user-testing)

# **Phase 1 - Definition and Planning**

---

## **1. User Personas**

- **Persona 1: Helen, 30, IT Planner, Finland**  
  Helen is a dog owner seeking an easy way to understand her dog’s behavior. She values clear, quick, and accessible information.  
  - **Needs:** Quick navigation, easily accessible behavior guides.
  - **Goals:** To learn more about dog behavior and improve communication with her pet.
  - **Pain Points:** Struggles with complex behavioral explanations; prefers simple, direct content.
  - **Tech-savviness:** High, comfortable with digital tools.

- **Persona 2: John, 45, Dog Trainer, UK**  
  John is an experienced dog trainer looking for advanced insights and professional-level content.  
  - **Needs:** In-depth, research-based information on dog behavior.
  - **Goals:** To access detailed training guides and advanced behavioral insights for clients.
  - **Pain Points:** Existing content is too basic for professional needs; wants more practical examples.
  - **Tech-savviness:** Moderate, familiar with using online resources but not overly reliant on new technology.

- **Persona 3: Sarah, 25, New Dog Owner, USA**  
  Sarah is a first-time dog owner seeking foundational knowledge about dogs.  
  - **Needs:** Basic dog care and behavior information.
  - **Goals:** To understand her dog's needs and create a happy and healthy environment.
  - **Pain Points:** Overwhelmed by the variety of dog training resources; needs a simplified, accessible guide.
  - **Tech-savviness:** Average, uses websites and social media frequently.

---

## **2. Use Cases and Usage Scenarios**

- **Use Case 1: Helen Searching for Dog Behavior Information**  
  - **Goal:** Helen wants to find out why her dog barks excessively.
  - **Flow:**  
    - **Homepage** → Search for "barking behavior" → View relevant articles → Learn about causes and solutions.
    - **Outcome:** Helen reads through the article and applies the knowledge to address her dog’s behavior.

- **Use Case 2: John Tracking Client Progress**  
  - **Goal:** John wants to track the progress of his clients’ dogs over time.
  - **Flow:**  
    - **Login Page** → Dashboard → Access client progress records → View and analyze dog behavior logs.
    - **Outcome:** John sees the progress reports and adjusts training programs accordingly.

- **Use Case 3: Sarah Understanding Basic Dog Commands**  
  - **Goal:** Sarah is looking for simple dog training tutorials.
  - **Flow:**  
    - **Homepage** → Training Section → Select “Basic Commands” → Follow the guide with step-by-step instructions.
    - **Outcome:** Sarah feels confident teaching her dog basic commands.

- **Use Case 4: John Engaging with Advanced Dog Behavior Studies**  
  - **Goal:** John is searching for more in-depth research articles and case studies on advanced dog behavior.
  - **Flow:**  
    - **Research Section** → Advanced Behavior Studies → Filter results by specific behavior types → Read detailed research.
    - **Outcome:** John gathers advanced insights to further his professional knowledge.

- **Use Case 5: Helen Asking for Expert Advice**  
  - **Goal:** Helen needs expert advice on a specific behavior problem.
  - **Flow:**  
    - **Contact Page** → Fill out a query form → Submit question about dog behavior → Receive expert advice via email.
    - **Outcome:** Helen gets a personalized solution from an expert to apply to her dog’s behavior.

---

## **3. UI Prototypes**

- **Homepage Layout:** A clean design with a prominent search bar at the top. Sections like "Dog Behaviors," "Training Tips," "Advanced Research," and "Expert Advice" will be clearly displayed.
- **Search Functionality:** The search bar allows users to quickly find articles based on their questions (e.g., “dog barking” or “dog training tips”).
- **Interactive Elements:** Hover effects on buttons, drop-down menus for categories, and a filtering system for research-based articles.
- **Content Sections:** Organized with headings, brief descriptions, and clear calls to action for further exploration.
- **Responsive Design:** The website will adjust seamlessly for different screen sizes, ensuring a good user experience across desktops, laptops, and tablets.
- (Prototypes will be created using Figma.)

---

## **4. Information Architecture and Technical Design**

- **Information Architecture (IA):**  
  The website structure will be clear and user-friendly:
  - **Homepage** → **Search Bar** → **Main Sections**: Dog Behaviors, Training Tips, Advanced Research, Expert Advice, and Contact.  
  - Each section will contain subsections, such as **Dog Behaviors**: Barking, Chewing, Play Behavior, etc.

- **Technical Design:**  
  - **Front-End**: HTML5, CSS3, JavaScript (for interactive elements). Using **React** to build a dynamic and fast-loading website.
  - **Back-End**: **Node.js with Express** to manage user data, such as saving dog behavior logs and delivering expert advice.  
  - **Database**: **MongoDB** will store articles, user interactions, and behavior logs.
  - **API Integration**: REST APIs will fetch and display relevant dog behavior content dynamically.
  
- **Accessibility Considerations:**  
  The website will prioritize accessibility with features like high **color contrast**, **text alternatives** for images, **clear navigation**, and **keyboard accessibility**.

## **5. Project Management and User Testing**

- **Time Log:** Maintained on a separate GitHub page.

- **Development Phases**  
- **Phase 1:** Definition and Planning  
- **Phase 2:** Basic Structure and Main Function  
- **Phase 3:** Advanced Features and Optimization  
- **Phase 4:** Presentation  

- **User Testing:**  
  I will conduct **two rounds of user testing**:
    1. **Round 1:** Focused on navigation and clarity. Will involve users trying to search for dog behaviors and navigating between sections.
    2. **Round 2:** Focused on engaging with advanced content. Users will interact with the progress tracking system and filter advanced studies.

  After gathering feedback, I’ll **refine** the design based on the users' experiences, making any necessary adjustments to improve usability.
