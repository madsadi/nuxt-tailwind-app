import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";
import { defineComponent } from "vue";

export default defineAppConfig({
  name: "Landing",
  title: "Landing",
  description: "Landing page for the application",
  layout: "landing",
  meta: {
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1",
  },
  landingNavigation: [
    { name: "Home", href: "/" },
    { name: "Store", href: "/store" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ],
  landingPage: {
    primaryFeatures: [
      {
        name: "Push to deploy.",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.",
        icon: CloudArrowUpIcon,
      },
      {
        name: "SSL certificates.",
        description:
          "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
        icon: LockClosedIcon,
      },
      {
        name: "Database backups.",
        description:
          "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.",
        icon: ServerIcon,
      },
    ],
    secondaryFeatures: [
      {
        name: "Push to deploy",
        description:
          "Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.",
        href: "#",
        icon: CloudArrowUpIcon,
      },
      {
        name: "SSL certificates",
        description:
          "Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.",
        href: "#",
        icon: LockClosedIcon,
      },
      {
        name: "Simple queues",
        description:
          "Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.",
        href: "#",
        icon: ArrowPathIcon,
      },
    ],
    featuredTestimonial: {
      body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
      author: {
        name: "Brenna Goyette",
        handle: "brennagoyette",
        imageUrl:
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
        logoUrl:
          "https://tailwindui.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
      },
    },
    landingTestimonials: [
      [
        [
          {
            body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
            author: {
              name: "Leslie Alexander",
              handle: "lesliealexander",
              imageUrl:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
          },
          // More testimonials...
        ],
        [
          {
            body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
            author: {
              name: "Lindsay Walton",
              handle: "lindsaywalton",
              imageUrl:
                "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
          },
          // More testimonials...
        ],
      ],
      [
        [
          {
            body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
            author: {
              name: "Tom Cook",
              handle: "tomcook",
              imageUrl:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
          },
          // More testimonials...
        ],
        [
          {
            body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
            author: {
              name: "Leonard Krasner",
              handle: "leonardkrasner",
              imageUrl:
                "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
          },
          // More testimonials...
        ],
      ],
    ],
  },
  aboutPage: {
    timeline: [
      {
        name: "Founded company",
        description:
          "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
        date: "Aug 2021",
        dateTime: "2021-08",
      },
      {
        name: "Secured $65m in funding",
        description:
          "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
        date: "Dec 2021",
        dateTime: "2021-12",
      },
      {
        name: "Released beta",
        description:
          "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
        date: "Feb 2022",
        dateTime: "2022-02",
      },
      {
        name: "Global launch of product",
        description:
          "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
        date: "Dec 2022",
        dateTime: "2022-12",
      },
    ],
    jobOpenings: [
      {
        id: 1,
        role: "Full-time designer",
        href: "#",
        description:
          "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
        salary: "$75,000 USD",
        location: "San Francisco, CA",
      },
      {
        id: 2,
        role: "Laravel developer",
        href: "#",
        description:
          "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
        salary: "$125,000 USD",
        location: "San Francisco, CA",
      },
      {
        id: 3,
        role: "React Native developer",
        href: "#",
        description:
          "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
        salary: "$105,000 USD",
        location: "San Francisco, CA",
      },
    ],
  },
  pricingPage: {
    pricing: {
      frequencies: [
        { value: "monthly", label: "Monthly" },
        { value: "annually", label: "Annually" },
      ],
      tiers: [
        {
          name: "Starter",
          id: "tier-starter",
          href: "#",
          featured: false,
          description: "Everything you need to get started.",
          price: { monthly: "$19", annually: "$199" },
          highlights: [
            "Custom domains",
            "Edge content delivery",
            "Advanced analytics",
          ],
        },
        {
          name: "Scale",
          id: "tier-scale",
          href: "#",
          featured: true,
          description: "Added flexibility at scale.",
          price: { monthly: "$99", annually: "$999" },
          highlights: [
            "Custom domains",
            "Edge content delivery",
            "Advanced analytics",
            "Quarterly workshops",
            "Single sign-on (SSO)",
            "Priority phone support",
          ],
        },
        {
          name: "Growth",
          id: "tier-growth",
          href: "#",
          featured: false,
          description: "All the extras for your growing team.",
          price: { monthly: "$49", annually: "$499" },
          highlights: [
            "Custom domains",
            "Edge content delivery",
            "Advanced analytics",
            "Quarterly workshops",
          ],
        },
      ],
      sections: [
        {
          name: "Features",
          features: [
            {
              name: "Edge content delivery",
              tiers: { Starter: true, Growth: true, Scale: true },
            },
            {
              name: "Custom domains",
              tiers: { Starter: "1", Growth: "3", Scale: "Unlimited" },
            },
            {
              name: "Team members",
              tiers: { Starter: "3", Growth: "20", Scale: "Unlimited" },
            },
            {
              name: "Single sign-on (SSO)",
              tiers: { Starter: false, Growth: false, Scale: true },
            },
          ],
        },
        {
          name: "Reporting",
          features: [
            {
              name: "Advanced analytics",
              tiers: { Starter: true, Growth: true, Scale: true },
            },
            {
              name: "Basic reports",
              tiers: { Starter: false, Growth: true, Scale: true },
            },
            {
              name: "Professional reports",
              tiers: { Starter: false, Growth: false, Scale: true },
            },
            {
              name: "Custom report builder",
              tiers: { Starter: false, Growth: false, Scale: true },
            },
          ],
        },
        {
          name: "Support",
          features: [
            {
              name: "24/7 online support",
              tiers: { Starter: true, Growth: true, Scale: true },
            },
            {
              name: "Quarterly workshops",
              tiers: { Starter: false, Growth: true, Scale: true },
            },
            {
              name: "Priority phone support",
              tiers: { Starter: false, Growth: false, Scale: true },
            },
            {
              name: "1:1 onboarding tour",
              tiers: { Starter: false, Growth: false, Scale: true },
            },
          ],
        },
      ],
    },
    faqs: [
      {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
          "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      // More questions...
    ],
  },

  landingFooterNavigation: {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Automation", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Submit ticket", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
    ],
    legal: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "License", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },

      {
        name: "GitHub",
        href: "https://github.com/madsadi",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },
    ],
  },
});
