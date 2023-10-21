import { component$, useSignal, useStore, /*Resource*/ } from "@builder.io/qwik";
import type { DocumentHead, /*RequestHandler*/ /*routeLoader*/ } from "@builder.io/qwik-city";

  // interface BlogData {
  //   id: string,
  //   title: string,
  // }

  // export const onGet: RequestHandler<BlogData[]> = async () => {
  //   console.log("fetching data..")

  //   const response = await fetch("http://localhost:3000/blogs");
  //   const data = await response.json()
  //   return data;
  // }

  // // !fetcovat data uz nejde cez useEndpoint ale cez routeloader

export default component$(() => {


  const name = useSignal("mario")
  const person = useStore({
    name: "peach", age: 30
  })

   const blogs = useStore([
     {
       id: 1,
       name: "mike",
       age: 20,
     },
     {
      id: 2,
       name: "george",
       age: 10,
     }]
   );


   const formVisible = useSignal(false)

  return (
    <>
      <h2>Cauuuu</h2>

      <p>hello, {name.value}</p>
      <p >
        hello, {person.name}, {person.age}
      </p>

      <button onClick$={() => (person.name = "luigi")}>click me</button>
      <br />
      <br />

      {blogs.map((blog) => (
        <div key={blog.id}>
          {blog.name}, {blog.age}
          <br />
          <br />
        </div>
      ))}

      <button onClick$={() => blogs.pop()}>remove a blog</button><br /><br />

      <button onClick$={() => formVisible.value = true}>show text</button><br />

      {formVisible.value && (
       <div>text</div>
      )}

      {/* <form  preventdefault:submit onSubmit$={}   pri inpute onInput={je aj (e.target as HTMLInputElement).value}>*/}
   

        {/* <Resource value={blogsData } onPending={() => <div>Loading...</div>}
          onResolved={(blogs) => (
              <div >
                    {blogs && blogs.map((blog) => (
                      <div key={blog.id}>
                            <h3>{blog.title}</h3>
                      </div>
                    ))}
              </div>
          )}
        /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Vitaj Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site ",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "some."
    }
  ]
};
