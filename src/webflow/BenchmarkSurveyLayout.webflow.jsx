import React from 'react';
import { declareComponent } from '@webflow/react';
import BenchmarkSurveyLayout from '../../shared/components/BenchmarkSurveyLayout';
import '../../shared/styles/charts.css';

/**
 * Webflow Code Component for Benchmark Survey Layout
 * Full layout with filters, tabs, and data display area
 * Matches the Scale VP benchmark survey page structure
 */
function BenchmarkSurveyLayoutWebflow() {
  return <BenchmarkSurveyLayout />;
}

export default declareComponent(BenchmarkSurveyLayoutWebflow, {
  name: 'BenchmarkSurveyLayout',
  description: 'Complete benchmark survey layout with filters, tabs, and data area',
  group: 'Benchmark Survey',
  props: {},
});
