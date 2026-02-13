import re
import json

# Read the file
with open('c:/@app-dev/web-hanja/cheonjamun_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract the data array
match = re.search(r'const cheonjamunData = \[(.*)\];', content, re.DOTALL)
if not match:
    print("Could not find cheonjamunData array")
    exit(1)

# Section mapping based on character ranges
section_map = {
    "1. 우주의 섭리와 자연 (1~32자)": "우주",
    "2. 기상과 지형의 신비 (33~64자)": "기상",
    "3. 생태계와 고대 역사 (65~100자)": "역사",
    "4. 성군의 통치와 평화 (101~136자)": "성군",
    "5. 덕화의 영향력 (137~168자)": "덕화",
    "6. 신체와 효도 (169~200자)": "신체",
    "7. 자기 성찰과 허물 고치기 (201~232자)": "성찰",
    "8. 지혜로운 삶의 태도 (233~264자)": "지혜",
    "9. 학문과 언어의 길 (265~300자)": "학문"
}

# Parse and modify data
data_str = match.group(1)
entries = re.findall(r'\{[^}]+\}', data_str)

current_chapter = "우주"
index = 1
modified_entries = []

for entry in entries:
    # Check if this entry has a section field
    section_match = re.search(r'"section":\s*"([^"]+)"', entry)
    if section_match:
        section_name = section_match.group(1)
        if section_name in section_map:
            current_chapter = section_map[section_name]
    
    # Remove section field and add index and chapter
    entry = re.sub(r',?\s*"section":\s*"[^"]+"\s*,?', '', entry)
    
    # Add index and chapter fields
    entry = entry.rstrip('}').rstrip()
    if not entry.endswith(','):
        entry += ','
    entry += f'\n        "index": "{index}",\n        "chapter": "{current_chapter}"\n    }}'
    
    modified_entries.append(entry)
    index += 1

# Reconstruct the file
new_data = ',\n    '.join(modified_entries)
new_content = content[:match.start(1)] + '\n    ' + new_data + '\n' + content[match.end(1):]

# Write back
with open('c:/@app-dev/web-hanja/cheonjamun_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully added index and chapter fields to {index-1} entries")
