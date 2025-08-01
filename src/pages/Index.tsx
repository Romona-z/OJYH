
import React from 'react';
import { Stethoscope, Users, Baby, Activity, Video, FileText, ChevronRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  // 疾病治疗专题
  const diseaseTopics = [
    {
      id: 'adult-asthma',
      title: '成人哮喘',
      icon: Users,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-600',
      description: '成人哮喘诊疗指南与治疗方案',
      count: '12篇文章',
      path: null
    },
    {
      id: 'pediatric-asthma',
      title: '儿童哮喘',
      icon: Baby,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-600',
      description: '儿童哮喘管理与用药指导',
      count: '8篇文章',
      path: null
    },
    {
      id: 'rhinitis',
      title: '鼻炎治疗',
      icon: Activity,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600',
      description: '过敏性鼻炎与慢性鼻炎治疗',
      count: '15篇文章',
      path: '/rhinitis'
    }
  ];

  // 学术资源
  const academicResources = [
    {
      id: 'clinical-guidelines',
      title: '诊疗指南',
      icon: BookOpen,
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-600',
      description: '权威诊疗指南与专家共识',
      count: '25份指南',
      path: null
    },
    {
      id: 'academic-conferences',
      title: '学术会议',
      icon: Users,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600',
      description: '学术会议信息与会议资料',
      count: '6场会议',
      path: null
    }
  ];

  const handleSectionClick = (section) => {
    if (section.path) {
      navigate(section.path);
    }
  };

  const latestResearch = [
    {
      title: '新型支气管扩张剂在哮喘治疗中的应用研究',
      date: '2024-06-28',
      tag: '最新研究',
      isNew: true
    },
    {
      title: '儿童哮喘长期管理策略的临床证据更新',
      date: '2024-06-25',
      tag: '指南更新',
      isNew: true
    },
    {
      title: '过敏性鼻炎免疫治疗的最新进展',
      date: '2024-06-20',
      tag: '综述',
      isNew: false
    }
  ];

  const academicConferences = [
    {
      title: '2024年中华医学会呼吸病学年会',
      date: '2024-07-15',
      tag: '学术会议',
      isNew: true
    },
    {
      title: '亚太地区哮喘与COPD学术论坛',
      date: '2024-07-10',
      tag: '国际会议',
      isNew: true
    },
    {
      title: '儿童呼吸系统疾病诊疗进展研讨会',
      date: '2024-07-05',
      tag: '专题会议',
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="relative overflow-hidden">
        <img 
          src="/lovable-uploads/d40cd99a-f8b2-471c-827f-8174d728e7fe.png" 
          alt="呼吸治疗科普 Banner" 
          className="w-full h-32 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 pb-6">
        {/* Disease Topics - 3 columns */}
        <div className="grid grid-cols-3 gap-2 -mt-6 mb-6">
          {diseaseTopics.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id} 
                className={`${section.color} hover:shadow-md transition-shadow cursor-pointer`}
                onClick={() => handleSectionClick(section)}
              >
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-2 rounded-full bg-white mb-2 ${section.iconColor}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-sm text-gray-800 mb-1">{section.title}</h3>
                    <p className="text-xs text-gray-600 mb-1 leading-tight">{section.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {section.count}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Latest Research Section */}
        <Card className="mb-4">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center text-lg">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              最新研究动态
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              {latestResearch.map((research, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <Badge 
                        variant={research.tag === '最新研究' ? 'default' : 'secondary'} 
                        className="text-xs mr-2"
                      >
                        {research.tag}
                      </Badge>
                      {research.isNew && (
                        <Badge variant="destructive" className="text-xs">
                          新
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-medium text-sm text-gray-800 leading-tight mb-1">
                      {research.title}
                    </h4>
                    <p className="text-xs text-gray-500">{research.date}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Resources - 2 columns */}
        <div className="grid grid-cols-2 gap-3">
          {academicResources.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id} 
                className={`${section.color} hover:shadow-md transition-shadow cursor-pointer`}
                onClick={() => handleSectionClick(section)}
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center">
                    <div className={`p-3 rounded-full bg-white mb-3 ${section.iconColor}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-1">{section.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{section.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      {section.count}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Index;
