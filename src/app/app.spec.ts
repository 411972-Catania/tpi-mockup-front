import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { FEATURES } from './core/data/platform-catalog';
import { TABLE_MOCKS } from './core/data/table-mock-catalog';
import { IDENTIDAD_FEATURE } from './features/identidad/feature';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should keep one unique slice per team', () => {
    expect(FEATURES).toHaveLength(12);
    expect(new Set(FEATURES.map(feature => feature.id)).size).toBe(12);
    expect(FEATURES.every(feature => feature.screens.length > 0)).toBe(true);
  });

  it('should expose only alumno, profesor, and admin in screen access', () => {
    const allowedRoles = new Set(['alumno', 'profesor', 'admin']);
    expect(FEATURES.every(feature => feature.screens.every(screen => screen.roles.every(role => allowedRoles.has(role))))).toBe(true);
  });

  it('should show two courses with a dedicated course-home mock', () => {
    const cursos = FEATURES.find(feature => feature.id === 'cursos');
    expect(cursos?.screens.find(screen => screen.id === 'mis-cursos')?.mock).toBe('course-list');
  });

  it('should use self-service registration mocks for both identity roles', () => {
    const getMock = (id: string) => IDENTIDAD_FEATURE.screens.find(screen => screen.id === id)?.mock;

    expect(getMock('registro-alumno')).toBe('registration');
    expect(getMock('registro-profesor')).toBe('registration');
  });

  it('should use dedicated activation and profile mocks for identity', () => {
    const getMock = (id: string) => IDENTIDAD_FEATURE.screens.find(screen => screen.id === id)?.mock;

    expect(getMock('onboarding')).toBe('onboarding');
    expect(getMock('perfil')).toBe('profile');
  });

  it('should give every tabular screen domain-specific columns and rows', () => {
    const tableScreens = FEATURES.flatMap(feature =>
      feature.screens.filter(screen => screen.mock === 'table').map(screen => `${feature.id}/${screen.id}`)
    );

    expect(Object.keys(TABLE_MOCKS).sort()).toEqual(tableScreens.sort());
    expect(Object.values(TABLE_MOCKS).every(mock => mock.rows.length > 0 && mock.headings.length === 4)).toBe(true);
  });
});
