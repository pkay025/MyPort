import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {

    return (
        <section>
            <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Mobile App, and Web Development & Computer Networking
            </h3>

            <p className="text-muted-foreground">
              With a year of experience in both fields, We have specialized
              in creating responsive, accessible, and performant mobile and web
              applications using modern technologies and also honed skills in network designs and implementation for some projects.
            </p>

            <p className="text-muted-foreground">
            We bring ideas to life through intuitive
            interfaces. We are proficient in using React and React Native to create dynamic and responsive user interfaces. We are constantly learning and improving our skills to build visually appealing and functional applications.
            
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://www.canva.com/design/DAGnPhT2cXk/yoJkXny__myPyuNWFxDXzw/edit?utm_content=DAGnPhT2cXk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mobile and Web Development</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and creating web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Computer Networking</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing efficient network solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </section>

    )

};