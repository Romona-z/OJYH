
import React, { useState } from 'react';
import { ArrowLeft, Search, Filter, Calendar, Video, Play, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const VideoEducationPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const asthmaVideos = [
    {
      id: 1,
      title: '成人哮喘急性发作的急救处理',
      date: '2024-06-28',
      year: '2024',
      duration: '12:30',
      category: '急救处理',
      description: '详细演示哮喘急性发作时的正确处理步骤',
      isNew: true
    },
    {
      id: 2,
      title: '儿童哮喘吸入器正确使用方法',
      date: '2024-06-20',
      year: '2024',
      duration: '8:45',
      category: '用药指导',
      description: '手把手教学各种吸入器的正确使用技巧',
      isNew: true
    },
    {
      id: 3,
      title: '哮喘患者的居家环境管理',
      date: '2024-05-15',
      year: '2024',
      duration: '15:20',
      category: '生活指导',
      description: '如何创造适合哮喘患者的居住环境',
      isNew: false
    },
    {
      id: 4,
      title: '哮喘与运动：安全锻炼指南',
      date: '2023-12-10',
      year: '2023',
      duration: '18:15',
      category: '运动指导',
      description: '哮喘患者如何安全地进行体育锻炼',
      isNew: false
    },
  ];

  const rhinitisVideos = [
    {
      id: 1,
      title: '过敏性鼻炎的鼻喷激素使用技巧',
      date: '2024-06-25',
      year: '2024',
      duration: '10:20',
      category: '用药指导',
      description: '正确使用鼻喷激素的详细演示',
      isNew: true
    },
    {
      id: 2,
      title: '鼻腔冲洗的标准操作流程',
      date: '2024-06-18',
      year: '2024',
      duration: '7:30',
      category: '护理操作',
      description: '安全有效的鼻腔清洁方法演示',
      isNew: true
    },
    {
      id: 3,
      title: '慢性鼻窦炎的家庭护理要点',
      date: '2024-04-22',
      year: '2024',
      duration: '13:45',
      category: '护理指导',
      description: '慢性鼻窦炎患者的日常护理注意事项',
      isNew: false
    },
    {
      id: 4,
      title: '季节性过敏性鼻炎的预防措施',
      date: '2023-11-08',
      year: '2023',
      duration: '16:30',
      category: '预防保健',
      description: '如何有效预防和减少季节性过敏症状',
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

  const filterVideos = (videos, query, year) => {
    return videos.filter(video => {
      const matchesSearch = query === '' || 
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.category.toLowerCase().includes(query.toLowerCase());
      const matchesYear = year === 'all' || video.year === year;
      return matchesSearch && matchesYear;
    });
  };

  const filteredAsthmaVideos = filterVideos(asthmaVideos, searchQuery, selectedYear);
  const filteredRhinitisVideos = filterVideos(rhinitisVideos, searchQuery, selectedYear);

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
              <Video className="h-5 w-5 text-orange-600 mr-2" />
              <h1 className="text-lg font-semibold text-gray-800">视频科普</h1>
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
              placeholder="搜索视频或分类..."
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

        {/* Tabs for Asthma and Rhinitis */}
        <Tabs defaultValue="asthma" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="asthma">哮喘视频</TabsTrigger>
            <TabsTrigger value="rhinitis">鼻炎视频</TabsTrigger>
          </TabsList>
          
          <TabsContent value="asthma" className="mt-4">
            <div className="space-y-3">
              {filteredAsthmaVideos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Video className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>暂无相关视频</p>
                </div>
              ) : (
                filteredAsthmaVideos.map((video) => (
                  <Card key={video.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="w-20 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                            <Play className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-2">
                            <Badge variant="secondary" className="text-xs mr-2">
                              {video.category}
                            </Badge>
                            {video.isNew && (
                              <Badge variant="destructive" className="text-xs">
                                新
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-medium text-sm text-gray-800 leading-tight mb-2">
                            {video.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                            {video.description}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {video.date}
                            <Clock className="h-3 w-3 ml-3 mr-1" />
                            {video.duration}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="rhinitis" className="mt-4">
            <div className="space-y-3">
              {filteredRhinitisVideos.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Video className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>暂无相关视频</p>
                </div>
              ) : (
                filteredRhinitisVideos.map((video) => (
                  <Card key={video.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <div className="w-20 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                            <Play className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center mb-2">
                            <Badge variant="secondary" className="text-xs mr-2">
                              {video.category}
                            </Badge>
                            {video.isNew && (
                              <Badge variant="destructive" className="text-xs">
                                新
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-medium text-sm text-gray-800 leading-tight mb-2">
                            {video.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                            {video.description}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            {video.date}
                            <Clock className="h-3 w-3 ml-3 mr-1" />
                            {video.duration}
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

export default VideoEducationPage;
