(function (global) {
  const speakers = [
    {
      name: "Dr. Sumit Goswami",
      socials: {
        linkedin: null,
        googleScholar: null,
        orcid: null,
      },
      description: `Dr. Sumit Goswami currently serves as the Director of the Directorate of Planning and Coordination (DP&C) at the Defence Research and Development Organisation (DRDO), headquartered in New Delhi. With a solid academic foundation in computer science and networks, he has made significant contributions to research in information extraction, next-generation networks, and security analysis. In his present capacity, he oversees strategic planning for DRDO’s technology priority areas, leads talent identification initiatives such as the Young Scientist Laboratory program, and facilitates collaboration between the defence R&D ecosystem, industry, and academia.`,
    },
    {
      name: "Dr. Sarbjot Singh Anand",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/sarabjot-singh-anand/?originalSubdomain=in",
        googleScholar:
          "https://scholar.google.com/citations?user=CtXeNuAAAAAJ&hl=en",
        orcid: null,
      },
      description: `Dr. Sarbjot Singh Anand is a distinguished Indian data scientist, academic, and entrepreneur with over three decades of expertise in machine learning, data mining, and analytics. Following a successful academic career in the United Kingdom—including his tenure as Associate Professor at the University of Warwick—he returned to India in the early 2010s to co-found Tatras Data, a boutique data science consulting firm. In 2018, he established the Sabudh Foundation, dedicated to upskilling engineering students in machine learning and leveraging data-driven methodologies to address social challenges in education, agriculture, governance, and healthcare. He has authored more than 90 academic publications spanning areas such as recommender systems, prognostic modeling, churn prediction, and web personalization. Dr. Anand also holds academic and adjunct positions, including at the Indian Institute of Science Education and Research (IISER) Mohali, and continues to actively mentor and train emerging data scientists.`,
    },
    {
      name: "Dr. Vishal Sharma",
      socials: {
        linkedin: "https://www.linkedin.com/in/vishal-sharma-a1b1292a/",
        googleScholar:
          "https://scholar.google.com/citations?user=7whtsiEAAAAJ&hl=en",
        orcid: "https://orcid.org/0000-0001-7470-6506",
      },
      description: `Dr. Vishal Sharma is a faculty member in the School of Electronics, Electrical Engineering, and Computer Science at Queen’s University Belfast (QUB), United Kingdom. His research focuses on the security of cyber-physical systems, unmanned aerial systems (UAVs), wireless and network security, distributed ledger (blockchain) technologies, and digital twins. He leads an active research group that recruits Ph.D. students in these areas. Prior to joining QUB, he held research positions at several international institutions, including the Singapore University of Technology and Design (SUTD) and Soonchunhyang University in South Korea. He has an extensive publication record with over 150 research outputs and has received multiple Best Paper Awards at international conferences.`,
    },
    {
      name: "Dr. Munesh Singh",
      socials: {
        linkedin: "https://www.linkedin.com/in/dr-munesh-pal-72239517/",
        googleScholar:
          "https://scholar.google.com/citations?user=hzlW9pYAAAAJ&hl=en",
        orcid: null,
      },
      description: `Dr. Munesh Singh, a Senior Member of IEEE, serves as Associate Professor and Head of the Department of Computer Science and Engineering at the National Institute of Technology (NIT) Delhi. He holds a Ph.D. in Computer Science and Engineering from NIT Rourkela and possesses extensive experience in both academia and industry, including his tenure at Honeywell Technology Solutions Lab. His research interests encompass the Internet of Things (IoT), wireless sensor networks, cyber-physical systems, machine-to-machine communication, software-defined networking (SDN), connected vehicles, and security in IoT and cloud computing. Dr. Singh has published numerous research papers in reputed journals and conferences and actively supervises research scholars in developing next-generation intelligent and secure systems.`,
    },
    {
      name: "Prof. Neeraj Kumar",
      socials: {
        linkedin: null,
        googleScholar:
          "https://scholar.google.com/citations?user=gL9gR-4AAAAJ&hl=en",
        orcid: null,
      },
      description: `Prof. Neeraj Kumar currently serves as Dean of Digital Content Transformation and Professor & Head of the Department of Computer Science and Engineering (DCSE) at Thapar Institute of Engineering and Technology, Patiala. He has been recognized as a Highly Cited Researcher by Thomson Reuters (Web of Science) in 2019–2021, ranking among the top 1% of researchers worldwide in Computer Science. He has supervised numerous Ph.D. and postgraduate students, received multiple Best Paper Awards, and led projects with significant external funding. His research focuses on Artificial Intelligence and Cybersecurity, and he holds editorial roles on several IEEE and ACM journals.`,
    },
    {
      name: "Dr. Manjeet Singh",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/manjeet-singh-makkar-9173945b/?originalSubdomain=in",
        googleScholar:
          "https://scholar.google.com/citations?user=PR5OuZIAAAAJ&hl=en",
        orcid: null,
      },
      description: `Dr. Manjeet Singh is a distinguished professional with over 27 years of experience, including four years in administrative leadership as Head of Department. His R&D portfolio includes the design and development of agricultural machines and technologies focused on conservation and precision agriculture. He has executed numerous externally funded projects, authored hundreds of publications, filed patents, and led extensive outreach and training programs for farmers and government bodies. His work has received multiple awards and has been transferred for commercialization and large-scale production.`,
    },
    {
      name: "Dr. Sukhjit Singh Sehra",
      socials: {
        linkedin:
          "https://www.linkedin.com/in/sukhjitsehra/?originalSubdomain=ca",
        googleScholar:
          "https://scholar.google.com/citations?user=VvDikIUAAAAJ&hl=en",
        orcid: null,
      },
      description: `Dr. Sukhjit Singh Sehra is an Assistant Professor in the Department of Computer Science at Wilfrid Laurier University, Canada. He earned his Ph.D. in Computer Science and Engineering from I.K. Gujral Punjab Technical University, India. His research centers on spatial analytics and smart navigational systems combining indoor–outdoor routing, augmented reality, machine learning, and natural language processing. He supervises undergraduate and graduate research projects in spatial data science and related AI applications.`,
    },
    {
      name: "Ms. Suchanda Basu",
      socials: {
        linkedin: "https://www.linkedin.com/in/suchanda-basu-a9b09b9/",
        googleScholar: null,
        orcid: null,
      },
      description: `With over 21 years in IT, Ms. Suchanda Basu is Principal Product Manager for the DevOps Cloud business, leading industry verticalization and alliance partner strategies. Her experience spans product management, application services, quality engineering, and partner management. She has led service creation and growth strategies across multiple sectors and has expertise in digital assurance strategy, market research, and go-to-market execution.`,
    },
    {
      name: "Mr. Parminder Singh Sandhu",
      socials: {
        linkedin: "https://www.linkedin.com/in/parmindersandhu83/",
        googleScholar: null,
        orcid: null,
      },
      description: `Mr. Parminder Singh Sandhu is an Information Security Manager at Apple Inc., San Francisco. He is a cybersecurity professional experienced in vulnerability assessment, web application security, penetration testing, DLP operations, incident investigation, and security policy administration. He is proficient with a broad set of security tools and has experience in IDS/IPS monitoring and firewall configuration.`,
    },
  ];

  // expose to global and CommonJS
  if (typeof global !== "undefined") global.speakers = speakers;
  if (typeof window !== "undefined") window.speakers = speakers;
  if (typeof module !== "undefined" && module.exports)
    module.exports = speakers;
})(
  typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : this
);
