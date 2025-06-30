
import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Calendar, FileText, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const RhinitisPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const guidelines = [
    {
      id: 1,
      title: '过敏性鼻炎诊断和治疗指南（2022年修订版）',
      date: '2024-06-15',
      year: '2024',
      category: '诊疗指南',
      description: '中华医学会耳鼻咽喉头颈外科学会制定',
      isNew: true
    },
    {
      id: 2,
      title: '慢性鼻窦炎诊断和治疗指南',
      date: '2024-03-20',
      year: '2024',
      category: '诊疗指南',
      description: '基于循证医学的最新治疗建议',
      isNew: true
    },
    {
      id: 3,
      title: '儿童过敏性鼻炎管理共识',
      date: '2023-11-10',
      year: '2023',
      category: '专家共识',
      description: '儿科与耳鼻喉科联合制定',
      isNew: false
    },
  ];

  const articles = [
    {
      id: 1,
      title: '鼻喷激素在过敏性鼻炎治疗中的合理应用',
      date: '2024-06-28',
      year: '2024',
      category: '临床研究',
      author: '张医生等',
      journal: '中华耳鼻咽喉头颈外科杂志',
      isNew: true
    },
    {
      id: 2,
      title: '免疫治疗在过敏性鼻炎中的长期效果评估',
      date: '2024-06-20',
      year: '2024',
      category: '综述',
      author: '李医生等',
      journal: '中国耳鼻咽喉头颈外科',
      isNew: true
    },
    {
      id: 3,
      title: '慢性鼻窦炎手术适应症的临床决策',
      date: '2024-05-15',
      year: '2024',
      category: '病例分析',
      author: '王医生等',
      journal: '临床耳鼻咽喉头颈外科杂志',
      isNew: false
    },
    {
      id: 4,
      title: '过敏性鼻炎与哮喘的关联性研究进展',
      date: '2023-12-08',
      year: '2023',
      category: '综述',
      author: '陈医生等',
      journal: '中华医学杂志',
      isNew: false
    },
  ];

  const years = ['all', '2024', '2023', '2022'];
  const yearLabels = {
    all: '全部',
    '2024': '2024年',
    '2023': '2023年',
    '2022': '2022年'
  };

  const filterItems = (items, query, year) => {
    return items.filter(item => {
      const matchesSearch = query === '' || 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.author && item.author.toLowerCase().includes(query.toLowerCase()));
      const matchesYear = year === 'all' || item.year === year;
      return matchesSearch && matchesYear;
    });
  };

  const filteredGuidelines = filterItems(guidelines, searchQuery, selectedYear);
  const filteredArticles = filterItems(articles, searchQuery, selectedYear);

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
        {/* Search and Filter Bar */}
        <div className="mb-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="搜索指南、文章或作者..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <div className="flex gap-2 flex-wrap">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                  className="text-xs"
                >
                  {yearLabels[year]}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs for Guidelines and Articles */}
        <Tabs defaultValue="guidelines" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="guidelines">诊疗指南</TabsTrigger>
            <TabsTrigger value="articles">学术文章</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guidelines" className="mt-4">
            <div className="space-y-3">
              {filteredGuidelines.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>暂无相关指南</p>
                </div>
              ) : (
                filteredGuidelines.map((guideline) => (
                  <Card key={guideline.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Badge variant="default" className="text-xs mr-2">
                              {guideline.category}
                            </Badge>
                            {guideline.isNew && (
                              <Badge variant="destructive" className="text-xs">
                                新
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-medium text-sm text-gray-800 leading-tight mb-2">
                            {guideline.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2">
                            {guideline.description}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {guideline.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="articles" className="mt-4">
            <div className="space-y-3">
              {filteredArticles.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>暂无相关文章</p>
                </div>
              ) : (
                filteredArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
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
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RhinitisPage;
