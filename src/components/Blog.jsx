const Blog = () => {
  return (
    <div className="flex-row justify-center outline m-5 p-5">
      <h2 className="font-semibold ">Learn Spring Boot Application</h2>
      <p className="my-3">
        Spring Boot is an open-source Java framework that simplifies the
        development of stand-alone, production-ready applications. Here are some
        key points about Spring Boot: Purpose and Features: Spring Boot combines
        the Spring Framework with embedded servers to create microservices and
        web-based applications. It aims to reduce configuration overhead by
        providing sensible defaults and auto-configuration. Spring Boot
        applications can be “just run” without extensive XML or annotation-based
        settings12. Getting Started: To develop your first Spring Boot
        application, follow these steps: Choose between Maven or Gradle as your
        build system. Create a pom.xml (for Maven) or build.gradle (for Gradle)
        file. Add the necessary dependencies, including the
        spring-boot-starter-parent. Write your application code, including a
        main method that delegates to SpringApplication.run(MyApplication.class,
        args)1. Resources for Learning: You can find tutorials and guides on
        Spring Boot from various sources: Spring Boot Tutorials (official
        documentation) GeeksforGeeks Spring Boot Tutorial HowToDoInJava Spring
        Boot Series Mastering Backend Spring Boot Guide JavaTpoint Spring Boot
        Tutorial. 
        Feel free to explore these resources to learn more about
        Spring Boot! 😊
      </p>
      <div className="flex justify-center">
        <button className="outline px-2 text-rose-500">Delete</button>
      </div>
    </div>
  );
};

export default Blog;
