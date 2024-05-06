import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export function LandingPlage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Kubernetes Control Plane Made Easy
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your Kubernetes management with our powerful control plane. Simplify cluster operations,
                  automate deployments, and enhance visibility.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Centralized cluster management
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Automated deployment and scaling
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Real-time monitoring and alerting
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Seamless integration with existing tools
                  </li>
                </ul>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  CLI Commands
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Kubernetes Workflows
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Leverage our powerful CLI to manage your Kubernetes clusters with ease. Explore the most commonly used
                  commands and their functionality.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Cluster Management</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>
                    kubectl get nodes kubectl create namespace my-namespace kubectl apply -f my-deployment.yaml
                  </code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your Kubernetes clusters, create namespaces, and deploy resources.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Monitoring and Logging</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>kubectl logs my-pod kubectl top nodes kubectl describe pod my-pod</code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitor your cluster's health, view pod logs, and get detailed resource information.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Scaling and Autoscaling</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>
                    kubectl scale deployment my-deployment --replicas=5 kubectl autoscale deployment my-deployment
                    --min=3 --max=10
                  </code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Scale your deployments manually or automatically based on resource utilization.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Networking and Services</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>
                    kubectl expose deployment my-deployment --type=LoadBalancer kubectl get services kubectl
                    port-forward pod/my-pod 8080:80
                  </code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expose your applications as services, manage network configurations, and forward local ports to pods.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Deployment Strategies</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>
                    kubectl rollout status deployment my-deployment kubectl rollout undo deployment my-deployment
                    kubectl set image deployment my-deployment my-container=my-image:v2
                  </code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your deployments with rolling updates, rollbacks, and image updates.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Configuration and Secrets</h3>
                <pre className="bg-gray-100 p-4 rounded-md text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <code>
                    kubectl create configmap my-config --from-file=config.yaml kubectl create secret generic my-secret
                    --from-literal=key=value kubectl get configmaps kubectl get secrets
                  </code>
                </pre>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your application configurations and sensitive data using ConfigMaps and Secrets.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Explore Our Comprehensive Documentation
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive deeper into the Kubernetes Control Plane and learn how to leverage its full capabilities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions or need assistance? Our team is here to help. Fill out the form below, and we'll get
                  back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4 pt-8">
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" type="text" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email address" type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
