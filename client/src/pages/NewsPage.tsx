import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
}

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/news`);
        setNewsItems(response.data);
      } catch (err) {
        setError("Failed to fetch news.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white">Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="section-container pt-24">
        <div className="text-center mb-16">
          <h1 className="section-title neon-text mb-4">Latest News</h1>
          <p className="section-subtitle mx-auto">
            Stay updated with the latest developments in technology, innovation, and digital transformation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <Card key={item._id} className="cyber-card hover:neon-glow transition-all duration-300">
              {item.image && (
                <img
                  src={`${import.meta.env.VITE_API_URL}/${item.image.replace('public/', '')}`}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/30">
                    {item.tags && item.tags.length > 0 ? item.tags[0] : "General"}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.date ? new Date(item.date).toLocaleDateString() : "N/A"}
                  </span>
                </div>
                <CardTitle className="text-xl text-foreground hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-4 text-primary hover:text-accent transition-colors font-medium">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;