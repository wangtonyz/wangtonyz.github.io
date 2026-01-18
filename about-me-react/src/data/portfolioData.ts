export const portfolioData = {
  hero: {
    name: "Zehui Wang",
    title: "Senior Cloud & AI Native Engineer",
    subtitle: "Cloud Native • AI Native • Distributed Systems",
    contact: [
      {
        text: "GitHub",
        icon: "fab fa-github",
        url: "https://github.com/wangtonyz",
        target: "_blank"
      },
      {
        text: "Email",
        icon: "fas fa-envelope",
        url: "mailto:wongsix777@gmail.com",
        target: ""
      }
    ]
  },
  about: {
    title: "Education",
    education: [
      {
        date: "2017 - 2021",
        institution: "Beijing Information Science & Technology University",
        degree: "Bachelor's Degree in Software Engineering",
        note: "The same school as <a href='https://manus.im' target='_blank' class='highlight-link'>Manus</a> co-founder Peak"
      }
    ]
  },
  skills: {
    title: "Technical Skills",
    categories: [
      {
        title: "Programming",
        icon: "fas fa-microchip",
        items: [
          {
            iconUrl: "https://cdn.simpleicons.org/go",
            name: "Go Programming"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/python",
            name: "Python Programming"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/jest",
            name: "Testing (Unit, Integration, 90%+ Coverage)"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/amp",
            name: "Concurrency & Parallelism"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/git",
            name: "Version Control (Git)"
          }
        ]
      },
      {
        title: "Cloud Native",
        icon: "fas fa-cloud",
        items: [
          {
            iconUrl: "https://cdn.simpleicons.org/openapiinitiative",
            name: "Microservices Architecture"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/cloudflare",
            name: "Cloud Platforms (AWS, GKE, OpenShift)"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/kubernetes",
            name: "Container Orchestration (Kubernetes, Docker)"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/githubactions",
            name: "DevOps & CI/CD (GitHub Actions, Helm, ArgoCD)"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/terraform",
            name: "Infrastructure as Code"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/prometheus",
            name: "Monitoring & Observability (Prometheus, DataDog)"
          }
        ]
      },
      {
        title: "AI",
        icon: "fas fa-brain",
        items: [
          {
            iconUrl: "https://cdn.simpleicons.org/claude",
            name: "AI Coding Assistant Tools"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/huggingface",
            name: "RAG (Retrieval Augmented Generation)"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/tensorflow",
            name: "AI Agent Development"
          },
          {
            iconUrl: "https://cdn.simpleicons.org/pytorch",
            name: "AI Platform Development"
          }
        ]
      }
    ]
  },
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        title: {
          en: "AIML Team",
          zh: "AI机器学习团队"
        },
        company: {
          en: "PayPal Inc.",
          zh: "美银宝"
        },
        position: {
          en: "Notebook Server and AI Model Training Platform",
          zh: "AI模型训练平台"
        },
        date: "8.2024 - 6.2025",
        responsibilities: [
          {
            en: "Maintained and developed core App and Pipeline services for continuous AI model training delivery",
            zh: "维护并开发核心应用程序，以实现持续的AI模型训练交付"
          },
          {
            en: "Led migration of traditional notebook services to containerized architecture, improving resource utilization",
            zh: "主导传统笔记本服务向容器化架构迁移，提高资源利用率"
          },
          {
            en: "Migrated monitoring from Splunk to Prometheus+DataDog ecosystem for real-time platform metrics tracking",
            zh: "将监控从Splunk迁移到Prometheus+DataDog生态系统，实现实时平台指标跟踪"
          },
          {
            en: "Developed Python automation scripts for user management and resource allocation",
            zh: "开发Python自动化脚本进行用户管理和资源分配"
          },
          {
            en: "Enhanced kubewatch for custom cluster metric monitoring and alert systems",
            zh: "增强kubewatch以实现自定义集群指标监控和警报系统"
          },
          {
            en: "Migrated storage services from Pure to HammerSpace with successful data transition",
            zh: "将存储服务从Pure成功迁移到HammerSpace，并完成数据转换"
          }
        ],
        techStack: ["OpenShift", "GKE", "GitHub Actions", "Helm", "ArgoCD"]
      },
      {
        title: {
          en: "WEX Team",
          zh: "WEX团队"
        },
        company: {
          en: "HP Inc.",
          zh: "惠普"
        },
        position: {
          en: "RemoteCare - Employee Remote Work Management",
          zh: "RemoteCare - 员工远程桌面管理系统"
        },
        date: "7.2023 - 7.2024",
        responsibilities: [
          {
            en: "Built Device Service from scratch for device registration, management and status monitoring with 90% test coverage",
            zh: "从零构建设备服务，实现设备注册、管理和状态监控，测试覆盖率达90%"
          },
          {
            en: "Developed IoT Service for device communication, data storage and analytics with 85% test coverage",
            zh: "开发物联网服务用于设备通信、数据存储和分析，测试覆盖率达85%"
          },
          {
            en: "Designed Istio service mesh for microservice communication with Prometheus monitoring",
            zh: "设计Istio服务网格用于微服务通信，并集成Prometheus监控"
          },
          {
            en: "Implemented CI/CD pipelines for automated build and deployment",
            zh: "实施CI/CD流水线实现自动构建和部署"
          },
          {
            en: "Managed Linux-based hardware devices including registration, management and monitoring modules",
            zh: "管理基于Linux的硬件设备，包括注册、管理和监控模块"
          }
        ],
        techStack: ["Go", "Clean Architecture", "MongoDB", "AWS", "MQTT", "WebRTC"]
      },
      {
        title: {
          en: "Backend Engineer (Golang)",
          zh: "后端工程师（Golang）"
        },
        company: {
          en: "Digifinex WEB3",
          zh: "Digifinex WEB3"
        },
        position: {
          en: "REST APIs and NFT Modules Development",
          zh: "REST API和NFT模块开发"
        },
        date: "2021 - 2023",
        responsibilities: [
          {
            en: "Developed REST APIs and NFT modules using Gin framework with 95% test coverage",
            zh: "使用Gin框架开发REST API和NFT模块，测试覆盖率达95%"
          },
          {
            en: "Extended stop-profit/stop-loss features with Redis for asynchronous message processing",
            zh: "扩展止盈止损功能，使用Redis进行异步消息处理"
          },
          {
            en: "Created consumer services with urfave/cli, implementing multi-threaded monitoring and delayed queues using Redis Pub/Sub and Zset",
            zh: "使用urfave/cli创建消费者服务，通过Redis Pub/Sub和Zset实现多线程监控和延迟队列"
          }
        ],
        techStack: ["Gin", "Redis", "NFT", "Web3"]
      }
    ]
  },
  summary: {
    title: "Professional Summary",
    items: [
      {
        icon: "fas fa-lightbulb",
        title: "Technical Expertise",
        description: "3+ years of cloud native and infrastructure automation experience, advanced Golang development skills on AWS/GKE/OpenShift platforms"
      },
      {
        icon: "fas fa-project-diagram",
        title: "Project Experience",
        description: "Specialized in container optimization, CI/CD pipeline design, and high-availability system maintenance; led multiple microservice projects from concept to implementation"
      },
      {
        icon: "fas fa-users",
        title: "Professional Qualities",
        description: "Strong cross-team collaboration skills, excellent documentation habits, and ability to solve complex problems through technical research and rapid learning"
      }
    ]
  },
  footer: {
    quote: `"A resume is a person's first impression. How you treat your resume is how you treat your work <br><br> 简历是一个人的门面，对待简历就是对待工作"`,
    credits: "Made with Qwen Coder And Roo Code Assistant."
  }
};