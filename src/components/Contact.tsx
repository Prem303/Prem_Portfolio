import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  // Formspree: replace with your form ID (from endpoint https://formspree.io/f/mgolawgv -> id = mgolawgv)
  const [formspreeState, formspreeSubmit] = useForm("mgolawgv");

  useEffect(() => {
    if (formspreeState.succeeded) {
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      fireConfetti();
      setTimeout(() => setSubmitted(false), 5000);
    }
  }, [formspreeState.succeeded]);

  const fireConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "premkumarm8008@gmail.com",
      href: "mailto:premkumarm8008@gmail.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 07730077005",
      href: "tel:+917730077005",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "premkumar-mukiti",
      href: "https://linkedin.com/in/premkumar-mukiti",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Telangana, India",
      href: "#",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      // submit to Formspree
      formspreeSubmit(e);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-primary/10 floating-animation pulse-glow"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-accent/15 floating-animation smooth-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-secondary/10 floating-animation" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Contact Form */}
            <div className="slide-in-left h-full">
              <Card className="card-shadow border-primary/20 bg-card/50 backdrop-blur-sm h-full flex flex-col">
                <CardHeader className="border-b border-primary/10 pb-4">
                  <CardTitle className="text-2xl font-bold">Send me a Message</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  {submitted ? (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <CheckCircle className="h-12 w-12 text-emerald-500 mb-4" />
                      <h4 className="text-lg font-medium">Message sent</h4>
                      <p className="text-sm text-foreground/70 mt-2">Thanks — I'll get back to you soon.</p>
                      <div className="mt-4 flex gap-2">
                        <Button size="sm" onClick={() => setSubmitted(false)}>Send another</Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col" aria-live="polite">
                      {formspreeState.errors && formspreeState.errors.length > 0 && (
                        <div className="rounded-md border border-destructive/20 bg-destructive/5 p-3 text-destructive text-sm">
                          <div className="font-semibold mb-1">Failed to send</div>
                          <div className="space-y-1">
                            {formspreeState.errors.map((err, i) => (
                              <div key={i}>{err.message || err.error || JSON.stringify(err)}</div>
                            ))}
                            <div className="mt-2">
                              <Button size="sm" variant="ghost" onClick={() => { setErrors({}); }}>Dismiss</Button>
                              <a className="ml-3 text-sm text-foreground/70" href="mailto:premkumarm8008@gmail.com">Or email directly</a>
                            </div>
                          </div>
                        </div>
                      )}
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className={`smooth-transition h-10 ${errors.name ? "border-destructive focus:border-destructive" : "border-primary/30 focus:border-primary"}`}
                      />
                      {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className={`smooth-transition h-10 ${errors.email ? "border-destructive focus:border-destructive" : "border-primary/30 focus:border-primary"}`}
                      />
                      {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
                      <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Subject</label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className={`smooth-transition h-10 ${errors.subject ? "border-destructive focus:border-destructive" : "border-primary/30 focus:border-primary"}`}
                      />
                      {errors.subject && <p className="text-destructive text-xs">{errors.subject}</p>}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2 flex-1">
                      <label className="text-sm font-semibold text-foreground">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        className={`min-h-[150px] smooth-transition resize-none ${errors.message ? "border-destructive focus:border-destructive" : "border-primary/30 focus:border-primary"}`}
                      />
                      {errors.message && <p className="text-destructive text-xs">{errors.message}</p>}
                      <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={formspreeState.submitting}
                      className={`w-full bg-gradient-to-r from-primary to-accent pulse-glow button-pop smooth-transition font-semibold text-white mt-4 ${formspreeState.submitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {formspreeState.submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Cards */}
            <div className="slide-in-right h-full" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-5 h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                </div>
                
                <div className="space-y-4 flex-1">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group block"
                    >
                      <Card 
                        className="card-shadow border-primary/20 hover:border-primary/40 smooth-transition scale-on-hover bg-card/50 backdrop-blur-sm cursor-pointer h-full"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <CardContent className="p-5 flex items-center gap-4 h-full">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 smooth-transition text-white`}>
                            {contact.icon}
                          </div>
                          
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-foreground text-sm">{contact.label}</h4>
                            <p className="text-sm text-foreground/70 break-words group-hover:text-primary smooth-transition">{contact.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>

                {/* Social Links Info */}
                <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <h4 className="font-semibold mb-4 text-foreground text-base">Availability</h4>
                  <ul className="space-y-3 text-sm text-foreground/80">
                    <li className="flex items-center gap-2">✓ <span>Open to new opportunities</span></li>
                    <li className="flex items-center gap-2">✓ <span>Available for freelance projects</span></li>
                    <li className="flex items-center gap-2">✓ <span>Response time: 24-48 hours</span></li>
                    <li className="flex items-center gap-2">✓ <span>Timezone: IST (UTC+5:30)</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;