
import React, { useState } from 'react';
import { ArrowLeft, Search, Calendar, FileText, BookOpen, Stethoscope, Pill, Heart, Wind } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RhinitisPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');


  const articles = [
    {
      id: 1,
      title: '【医院】同一气道，同一对策',
      date: '2025-03-06',
      year: '2025',
      category: '医学软文',
      author: '医院专家团队',
      journal: '呼吸医学期刊',
      isNew: true,
      thumbnail: 'lungs'
    },
    {
      id: 2,
      title: '【医院】糖皮质激素可能难以阻断白三烯介导的炎症，ICS+LTRA双通道抗炎更有效（医学软文）',
      date: '2024-06-07',
      year: '2024',
      category: '临床研究',
      author: '呼吸科专家',
      journal: '临床医学杂志',
      isNew: true,
      thumbnail: 'pills'
    },
    {
      id: 3,
      title: '【医院】百日咳来袭，久咳不愈一定是因为患上百日咳吗？（医学软文）',
      date: '2024-05-22',
      year: '2024',
      category: '疾病科普',
      author: '儿科专家',
      journal: '儿科医学期刊',
      isNew: false,
      thumbnail: 'cough'
    },
    {
      id: 4,
      title: '【医院】重视哮喘的小气道病变和管理（医学软文）',
      date: '2024-04-28',
      year: '2024',
      category: '哮喘管理',
      author: '呼吸科医师',
      journal: '哮喘研究杂志',
      isNew: false,
      thumbnail: 'inhaler'
    },
  ];

  // 过滤文章的函数
  const filteredArticles = articles.filter(article => {
    if (searchQuery === '') return true;
    return article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
           article.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getThumbnailIcon = (thumbnail) => {
    switch (thumbnail) {
      case 'lungs':
        return Stethoscope;
      case 'pills':
        return Pill;
      case 'cough':
        return Heart;
      case 'inhaler':
        return Wind;
      default:
        return FileText;
    }
  };

  const getThumbnailColor = (thumbnail) => {
    switch (thumbnail) {
      case 'lungs':
        return 'bg-blue-100 text-blue-600';
      case 'pills':
        return 'bg-orange-100 text-orange-600';
      case 'cough':
        return 'bg-green-100 text-green-600';
      case 'inhaler':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="mr-2 p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 text-purple-600 mr-2" />
              <h1 className="text-lg font-semibold text-gray-800">鼻炎治疗</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="搜索文章、作者或分类..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-3">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>暂无相关文章</p>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const ThumbnailIcon = getThumbnailIcon(article.thumbnail);
              return (
                <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getThumbnailColor(article.thumbnail)}`}>
                        <ThumbnailIcon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Badge variant="secondary" className="text-xs mr-2">
                            {article.category}
                          </Badge>
                          {article.isNew && (
                            <Badge variant="destructive" className="text-xs">
                              新
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-medium text-sm text-gray-800 leading-tight mb-2">
                          {article.title}
                        </h3>
                        <div className="space-y-1 text-xs text-gray-600">
                          <p>作者：{article.author}</p>
                          <p>期刊：{article.journal}</p>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default RhinitisPage;
