import { createClient } from "next-sanity";


export default function Sanity({ banners }) {
    return (
      <>
        <header>
          <h1>Sanity + Next.js</h1>
        </header>
        <main>
          <h2>pets</h2>
          {banners.length > 0 && (
            <ul>
              {banners.map((pet) => (
                <li key={pet._id}>{pet?.name}</li>
              ))}
            </ul>
          )}
          {!banners.length > 0 && <p>No pets to show</p>}
          {banners.length > 0 && (
            <div>
              <pre>{JSON.stringify(banners, null, 2)}</pre>
            </div>
          )}
          {!banners.length > 0 && (
            <div>
              <div>¯\_(ツ)_/¯</div>
              <p>
                Your data will show up here when you've configured everything
                correctly
              </p>
            </div>
          )}
        </main>
      </>
    );
  }

  
  export async function getStaticProps() {
    const banners = await client.fetch(`*[_type == "banners"]`);  
    return {
      props: {
        banners
      }
    };
  }